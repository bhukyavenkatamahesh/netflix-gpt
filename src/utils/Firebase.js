// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbNwmahQTO65wFyDHKjDkqWvcY9LFUWIw",
  authDomain: "netflixgpt-616f4.firebaseapp.com",
  projectId: "netflixgpt-616f4",
  storageBucket: "netflixgpt-616f4.appspot.com",
  messagingSenderId: "1079689380845",
  appId: "1:1079689380845:web:a01415da5ebb3670ecdde4",
  measurementId: "G-5WX9D6KXQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
