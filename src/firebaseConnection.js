import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const apiKey = process.env.API_KEY;


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "curso-3c10b.firebaseapp.com",
    projectId: "curso-3c10b",
    storageBucket: "curso-3c10b.firebasestorage.app",
    messagingSenderId: "406061127398",
    appId: "1:406061127398:web:6f86290bf8e13262b8cd27",
    measurementId: "G-W63EYG09KS"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };