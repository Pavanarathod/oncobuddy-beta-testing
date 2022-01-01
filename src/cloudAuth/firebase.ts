// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCyrPLqHb2Ds24tHo4MEJSsoc8F9PI37xQ",
  authDomain: "hionco-development.firebaseapp.com",
  projectId: "hionco-development",
  storageBucket: "hionco-development.appspot.com",
  messagingSenderId: "407903415351",
  appId: "1:407903415351:web:1db3496ea5345c6113e3b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseUserAuth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

export {
  firebaseUserAuth,
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
