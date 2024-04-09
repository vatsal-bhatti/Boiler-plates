// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw8nHOdd_wUQeahAsvXVAkbsYrryviIsk",
  authDomain: "hackfolio-4e610.firebaseapp.com",
  projectId: "hackfolio-4e610",
  storageBucket: "hackfolio-4e610.appspot.com",
  messagingSenderId: "324311804027",
  appId: "1:324311804027:web:b668f001a09d2348399ade"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


