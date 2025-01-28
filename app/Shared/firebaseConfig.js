// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pinterestclone-a42af.firebaseapp.com",
  projectId: "pinterestclone-a42af",
  storageBucket: "pinterestclone-a42af.firebasestorage.app",
  messagingSenderId: "260902781613",
  appId: "1:260902781613:web:b7cac74de0a8da9b87fc24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;