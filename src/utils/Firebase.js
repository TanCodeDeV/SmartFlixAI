// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq3f2x8kVd80mFgAN6qzMTehSE9daXUnM",
  authDomain: "smartflixai.firebaseapp.com",
  projectId: "smartflixai",
  storageBucket: "smartflixai.firebasestorage.app",
  messagingSenderId: "225419814407",
  appId: "1:225419814407:web:b64d789867a0ba688baca2",
  measurementId: "G-1S5BXG1PKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
