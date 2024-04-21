// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAynxCey9Lqe_8egZQdXZwvrpjI05qMecQ",
  authDomain: "conxpert-f18df.firebaseapp.com",
  projectId: "conxpert-f18df",
  storageBucket: "conxpert-f18df.appspot.com",
  messagingSenderId: "731415581447",
  appId: "1:731415581447:web:cab9be3f0d4a5e64beeba2",
  measurementId: "G-HQNES849B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
