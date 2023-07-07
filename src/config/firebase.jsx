// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsPinnVIV8oaTuzbGExZjmtS-rZaiq6N4",
  authDomain: "where-is-waldo-29fb5.firebaseapp.com",
  projectId: "where-is-waldo-29fb5",
  storageBucket: "where-is-waldo-29fb5.appspot.com",
  messagingSenderId: "873237056633",
  appId: "1:873237056633:web:c4162f89c2c988e55798a8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);