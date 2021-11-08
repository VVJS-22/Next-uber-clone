import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8fu3fNs7QpFjbm_g4A79TrKNSJNkJHO4",
  authDomain: "uber-clone-jswithjs.firebaseapp.com",
  projectId: "uber-clone-jswithjs",
  storageBucket: "uber-clone-jswithjs.appspot.com",
  messagingSenderId: "129788995294",
  appId: "1:129788995294:web:e667cb064a56297ac0844f",
  measurementId: "G-44YMTYZVCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }