// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvuI03REZaMwbHMLd0jcGJLXvM0uy_jLs",
  authDomain: "nesttest-5aaa7.firebaseapp.com",
  projectId: "nesttest-5aaa7",
  storageBucket: "nesttest-5aaa7.firebasestorage.app",
  messagingSenderId: "1075776326839",
  appId: "1:1075776326839:web:f9e306357d843d55e01132",
  measurementId: "G-6L1CCN1YTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);