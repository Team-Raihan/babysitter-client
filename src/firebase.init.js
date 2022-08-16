// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRPCZ7tMOnHVMlH8RKke9QM7S_FcqXrUI",
  authDomain: "babysitter-book.firebaseapp.com",
  projectId: "babysitter-book",
  storageBucket: "babysitter-book.appspot.com",
  messagingSenderId: "658398848670",
  appId: "1:658398848670:web:dc174a99e6f085ec1b7d8f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
