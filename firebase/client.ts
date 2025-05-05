// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase-admin/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6x02CNt03z4BRfN3g7-NT4FTeEz-nMvA",
  authDomain: "rubber-duck-528c8.firebaseapp.com",
  projectId: "rubber-duck-528c8",
  storageBucket: "rubber-duck-528c8.firebasestorage.app",
  messagingSenderId: "56124016394",
  appId: "1:56124016394:web:7d70bfc2e7c73313211cf3",
  measurementId: "G-1WLF9XZF12",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
