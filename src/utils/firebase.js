// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa-1avpJkoYvKQ0g8UzK-VqJV6g6wUziU",
  authDomain: "netflix-gpt-afbae.firebaseapp.com",
  projectId: "netflix-gpt-afbae",
  storageBucket: "netflix-gpt-afbae.firebasestorage.app",
  messagingSenderId: "949017668446",
  appId: "1:949017668446:web:e0f4e6e877ad5f6534fdcf",
  measurementId: "G-5V9ZTZEX7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
