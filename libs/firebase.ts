// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkiBojQ-YVOXf-6KpWUPEnGyvwGCy_MTI",
  authDomain: "e-shop-36ef7.firebaseapp.com",
  projectId: "e-shop-36ef7",
  storageBucket: "e-shop-36ef7.appspot.com",
  messagingSenderId: "131583225066",
  appId: "1:131583225066:web:f300e63b7d1d7889423b93"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp