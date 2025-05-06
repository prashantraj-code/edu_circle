// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zSLFCjjiBC6GPydjc7Xx2kwsKJLe9c0",
  authDomain: "educircle-2ee41.firebaseapp.com",
  projectId: "educircle-2ee41",
  storageBucket: "educircle-2ee41.firebasestorage.app",
  messagingSenderId: "445487296840",
  appId: "1:445487296840:web:8670aef65d02a0fb30037d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
