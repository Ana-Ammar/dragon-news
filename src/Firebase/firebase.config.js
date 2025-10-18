// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-TjwZRrTnTKrA5tYGtz5d5VeReHJY8c",
  authDomain: "dragon-news-24-by-7.firebaseapp.com",
  projectId: "dragon-news-24-by-7",
  storageBucket: "dragon-news-24-by-7.firebasestorage.app",
  messagingSenderId: "554940981221",
  appId: "1:554940981221:web:6ae2d086f16278c21cd90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;