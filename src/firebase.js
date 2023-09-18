import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY ,
    authDomain: "tutorial-c671d.firebaseapp.com",
    projectId: "tutorial-c671d",
    storageBucket: "tutorial-c671d.appspot.com",
    messagingSenderId: "722583769596",
    appId: "1:722583769596:web:0e7843e0a874f0b41a6279"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);