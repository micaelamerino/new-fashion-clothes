// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbGA9FecE0Pdt_2DsQQZ8Oo4kVme_OIbA",
  authDomain: "fashion-clothes-a26af.firebaseapp.com",
  projectId: "fashion-clothes-a26af",
  storageBucket: "fashion-clothes-a26af.appspot.com",
  messagingSenderId: "151391955874",
  appId: "1:151391955874:web:90055ac9f7b9166dfde0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);