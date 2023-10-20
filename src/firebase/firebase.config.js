// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-d0GJQI2OPjgZOJxhQJE0E8cf2O-sxUU",
  authDomain: "coffee-store-498d0.firebaseapp.com",
  projectId: "coffee-store-498d0",
  storageBucket: "coffee-store-498d0.appspot.com",
  messagingSenderId: "119337520144",
  appId: "1:119337520144:web:7e4023152bb2dd52290e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;