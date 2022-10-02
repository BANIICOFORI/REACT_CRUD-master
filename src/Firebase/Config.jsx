// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcf5ts5kyC4JS4uYqfHNihdVsiX-C8i8Q",
  authDomain: "usersapp-3af49.firebaseapp.com",
  projectId: "usersapp-3af49",
  storageBucket: "usersapp-3af49.appspot.com",
  messagingSenderId: "385352273225",
  appId: "1:385352273225:web:f4817d6d022410f83e5e98",
  measurementId: "G-Y173LLR14G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);