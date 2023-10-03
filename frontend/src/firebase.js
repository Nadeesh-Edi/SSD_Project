// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesv

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD10gCWffIzU4zwjiqSb7ifoYRTFq73M20",
  authDomain: "carlton-74b62.firebaseapp.com",
  projectId: "carlton-74b62",
  storageBucket: "carlton-74b62.appspot.com",
  messagingSenderId: "33607381908",
  appId: "1:33607381908:web:04e07fb6b70a7433ef9581",
  measurementId: "G-S5NK27FWWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };