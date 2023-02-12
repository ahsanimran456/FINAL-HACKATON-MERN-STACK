import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";

import {
    setDoc,
    getFirestore,
    doc,
    getDocs,
    getDoc,
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteField,
    query, where,
    orderBy,

} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAnnCNWsHUJFze854dWrFbqZE6hvh0pY7s",
    authDomain: "saylani-mart.firebaseapp.com",
    projectId: "saylani-mart",
    storageBucket: "saylani-mart.appspot.com",
    messagingSenderId: "607228020579",
    appId: "1:607228020579:web:d6fd68ad19f55614c47556",
    measurementId: "G-CFGMNNYBW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider_google = new GoogleAuthProvider();
const db = getFirestore(app)
const auth = getAuth()

export {
    provider_google, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,createUserWithEmailAndPassword,

    doc, setDoc, db,
    getDocs,
    getDoc,
    collection,
    onSnapshot,
    query, where,
    addDoc,
    orderBy,
    signOut,
    auth,
    
}
