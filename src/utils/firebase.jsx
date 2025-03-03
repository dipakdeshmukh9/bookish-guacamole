// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAs0eK_q3EIH7RnmweyNv1XsxE-FXm-ys",
  authDomain: "netflixgpt5-4f518.firebaseapp.com",
  projectId: "netflixgpt5-4f518",
  storageBucket: "netflixgpt5-4f518.firebasestorage.app",
  messagingSenderId: "369184764567",
  appId: "1:369184764567:web:d20bef1bda1774f813efd2",
  measurementId: "G-NK8JZMLPBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
