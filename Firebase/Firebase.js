// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSVFoPZlbRt079AfW9V7kdnbOJ9fufb2g",
  authDomain: "blog-e7381.firebaseapp.com",
  projectId: "blog-e7381",
  storageBucket: "blog-e7381.firebasestorage.app",
  messagingSenderId: "808862777822",
  appId: "1:808862777822:web:e6598f932e61f9990edd4f"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
