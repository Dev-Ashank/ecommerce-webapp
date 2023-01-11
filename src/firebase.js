
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvMHxyaOfARIGqRPBZSkeYLuQtzo7urls",
  authDomain: "ecommerce-webapp-7919f.firebaseapp.com",
  projectId: "ecommerce-webapp-7919f",
  storageBucket: "ecommerce-webapp-7919f.appspot.com",
  messagingSenderId: "724493691640",
  appId: "1:724493691640:web:4f3ffdb84d739b87a6690d",
  measurementId: "G-HS48SFYKR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export{db,auth}