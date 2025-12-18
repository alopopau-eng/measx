"use client"

import { useEffect, useState } from "react"
import { CreditCard } from "lucide-react"

interface CardMockupProps {
  cardNumber?: string
  cardName?: string
  cardMonth?: string
  cardYear?: string
  expiryDate?: string
}

interface BinData {
  bank: string
  card: string
  type: string
  level: string
  country: string
  countryCode: string
  valid: boolean
}

export function CardMockup({ cardNumber, cardName, cardMonth, cardYear, expiryDate }: CardMockupProps) {
  const [binData, setBinData] = useState<BinData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (cardNumber && cardNumber.length >= 6) {
      setLoading(true)
      fetch(`/api/bin-lookup?bin=${cardNumber.substring(0, 6)}`)
        .then(res => res.json())
        .then(data => {
          if (!data.error) {
            setBinData(data)
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [cardNumber])

  const formatCardNumber = (num: string) => {
    if (!num) return "•••• •••• •••• ••••"
    const cleaned = num.replace(/\s/g, '')
    const groups = cleaned.match(/.{1,4}/g) || []
    return groups.join(' ').padEnd(19, '•')
  }

  const getCardBrandColor = (brand: string) => {
    switch (brand?.toUpperCase()) {
      case 'VISA':
        return 'from-blue-600 to-blue-800'
      case 'MASTERCARD':
        return 'from-red-600 to-orange-600'
      case 'AMERICAN EXPRESS':
      case 'AMEX':
        return 'from-blue-400 to-blue-600'
      case 'DISCOVER':
        return 'from-orange-500 to-orange-700'
      default:
        return 'from-gray-700 to-gray-900'
    }
  }

  const getCardBrandLogo = (brand: string) => {
    switch (brand?.toUpperCase()) {
      case 'VISA':
        return (
          <div className="text-white font-bold text-2xl italic tracking-tight">VISA</div>
        )
      case 'MASTERCARD':
        return (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -mr-4"></div>
          </div>
        )
      case 'AMERICAN EXPRESS':
      case 'AMEX':
        return (
          <div className="text-white font-bold text-lg">AMEX</div>
        )
      case 'MADA':
        return (
          <div className="text-white font-bold text-xl">mada</div>
        )
      default:
        return <CreditCard className="w-8 h-8 text-white" />
    }
  }

  return (
    <div className={`relative w-full max-w-[320px] aspect-[1.586/1] rounded-xl bg-gradient-to-br ${getCardBrandColor(binData?.card || '')} p-5 shadow-xl overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            {loading ? (
              <div className="h-4 w-24 bg-white/20 rounded animate-pulse"></div>
            ) : (
              <span className="text-white/90 text-xs font-medium truncate max-w-[150px]">
                {binData?.bank || 'البنك'}
              </span>
            )}
            {binData?.type && (
              <span className="text-white/70 text-[10px]">
                {binData.type} {binData.level && `- ${binData.level}`}
              </span>
            )}
          </div>
          {getCardBrandLogo(binData?.card || '')}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-7 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md"></div>
          <div className="w-6 h-6 border-2 border-white/40 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border border-white/40 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-white text-lg font-mono tracking-[0.2em] text-center" dir="ltr">
            {formatCardNumber(cardNumber || '')}
          </div>
          
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-white/60 text-[8px] uppercase">Card Holder</span>
              <span className="text-white text-xs font-medium truncate max-w-[140px]">
                {cardName || 'اسم حامل البطاقة'}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white/60 text-[8px] uppercase">Expires</span>
              <span className="text-white text-xs font-mono">
                {expiryDate || (cardMonth && cardYear ? `${cardMonth}/${cardYear}` : 'MM/YY')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
