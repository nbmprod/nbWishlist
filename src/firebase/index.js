// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkeWw7Z_tld5PAYTwmpc5FUvt4ico6HJU",
  authDomain: "nbwishlist.firebaseapp.com",
  projectId: "nbwishlist",
  storageBucket: "nbwishlist.appspot.com",
  messagingSenderId: "22314961918",
  appId: "1:22314961918:web:4de580a2503cfc7e870eaf",
  measurementId: "G-SZ0J77SWPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {
    db
}