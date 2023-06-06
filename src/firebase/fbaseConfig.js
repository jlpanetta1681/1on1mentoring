import firebase from 'firebase/app';
import 'firebase/auth';
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLnE1zXvchJK3qmmG25BD9Ypr6MhYleek",
    authDomain: "pathfinders-33f9c.firebaseapp.com",
    projectId: "pathfinders-33f9c",
    storageBucket: "pathfinders-33f9c.appspot.com",
    messagingSenderId: "974121287821",
    appId: "1:974121287821:web:4e9439ff058dd6378f22c4",
    measurementId: "G-R1PSBXD7H7"
  };
// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

// Expose the instances we'll need
export { app, firestore, auth }