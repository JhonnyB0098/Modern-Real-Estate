// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d8d3e.firebaseapp.com",
  projectId: "real-estate-d8d3e",
  storageBucket: "real-estate-d8d3e.appspot.com",
  messagingSenderId: "634236252812",
  appId: "1:634236252812:web:6b8e0a0fa7515d847101a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);