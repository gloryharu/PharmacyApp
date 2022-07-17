// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9EvSpBaQm66-XUZtHcN5hIJwZ1XCDwrM",
  authDomain: "fir-auth-1281b.firebaseapp.com",
  projectId: "fir-auth-1281b",
  storageBucket: "fir-auth-1281b.appspot.com",
  messagingSenderId: "340610543861",
  appId: "1:340610543861:web:428e3a90d82081d11315bc"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

