// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcCIUZhBI5Ob9TVwqxCqVNUPan2zbaBLE",
  authDomain: "coffee-store-24.firebaseapp.com",
  projectId: "coffee-store-24",
  storageBucket: "coffee-store-24.appspot.com",
  messagingSenderId: "53059871305",
  appId: "1:53059871305:web:6df5220c7f360c38165598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;