// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2gaTAhskY_1Cnmp9xwEfepCmRdcOKuMY",
  authDomain: "next14-cc-89dbd.firebaseapp.com",
  projectId: "next14-cc-89dbd",
  storageBucket: "next14-cc-89dbd.firebasestorage.app",
  messagingSenderId: "240824369882",
  appId: "1:240824369882:web:fe858a2e976867d65e9be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)