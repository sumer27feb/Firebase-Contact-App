// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK4otujtbfOkr332gZUG7Fe1NPYFARsN8",
  authDomain: "vite-contact-13033.firebaseapp.com",
  projectId: "vite-contact-13033",
  storageBucket: "vite-contact-13033.appspot.com",
  messagingSenderId: "318227221273",
  appId: "1:318227221273:web:8b9ebbe11c07cc1883d388",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
