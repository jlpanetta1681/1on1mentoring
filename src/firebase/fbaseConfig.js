import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: AIzaSyAgzxBS3IPmO8DhFvG7htW2Hxw4_fmvB20,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

// Expose the instances we'll need
export { app, firestore, auth }