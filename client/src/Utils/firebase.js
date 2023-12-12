// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGDOPdU_5HMzRWU05oH0jOgndiVv7lq2w",
  authDomain: "disney-hotstar-4862a.firebaseapp.com",
  projectId: "disney-hotstar-4862a",
  storageBucket: "disney-hotstar-4862a.appspot.com",
  messagingSenderId: "850399243700",
  appId: "1:850399243700:web:05119feb5098641e4016e1",
  measurementId: "G-20D12FM930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
