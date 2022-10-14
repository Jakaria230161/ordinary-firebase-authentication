// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNMlVcGRiMg_7v9i5Q8nbUjus87FyGXto",
  authDomain: "ordinary-firebase-auth.firebaseapp.com",
  projectId: "ordinary-firebase-auth",
  storageBucket: "ordinary-firebase-auth.appspot.com",
  messagingSenderId: "926611226274",
  appId: "1:926611226274:web:7a0a713402d04604b4a1fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;