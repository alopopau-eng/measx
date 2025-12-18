import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const bin = searchParams.get('bin')

  if (!bin || bin.length < 6) {
    return NextResponse.json({ error: 'Invalid BIN' }, { status: 400 })
  }

  const apiKey = process.env.BINCODES_API_KEY
  if (!apiKey) {
    console.error('BINCODES_API_KEY not configured')
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  try {
    const binDigits = bin.replace(/\s/g, '').substring(0, 6)
    const apiUrl = `https://api.bincodes.com/bin/?format=json&api_key=${apiKey}&bin=${binDigits}`
    
    console.log('Fetching BIN data for:', binDigits)
    
    const response = await fetch(apiUrl, { 
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      }
    })

    const data = await response.json()
    console.log('BIN API response:', data)

    if (data.error || data.valid === 'false') {
      return NextResponse.json({ 
        error: data.error || 'BIN not found',
        bank: 'غير معروف',
        card: 'غير معروف',
        type: '',
        level: '',
        country: '',
        countryCode: '',
        valid: false
      })
    }

    return NextResponse.json({
      bank: data.bank || 'غير معروف',
      card: data.card || 'غير معروف',
      type: data.type || '',
      level: data.level || '',
      country: data.country || '',
      countryCode: data.countrycode || '',
      valid: data.valid === 'true'
    })
  } catch (error) {
    console.error('BIN lookup error:', error)
    return NextResponse.json({ 
      error: 'BIN lookup failed',
      bank: 'غير معروف',
      card: 'غير معروف',
      type: '',
      level: '',
      country: '',
      countryCode: '',
      valid: false
    }, { status: 500 })
  }
}
