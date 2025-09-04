// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYqT5lkjbKJtjC3HS9piu8G0M6P8QnADA",
  authDomain: "dine-time-f5d3d.firebaseapp.com",
  projectId: "dine-time-f5d3d",
  storageBucket: "dine-time-f5d3d.firebasestorage.app",
  messagingSenderId: "467620152998",
  appId: "1:467620152998:web:7a21f269749fac77601667",
  measurementId: "G-RJY5PQL1LT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);