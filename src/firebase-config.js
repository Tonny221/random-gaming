import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCej0Ow0Y-L9O5XvPZ00ax71juuGOYeaZA",
    authDomain: "random-gaming-3beaa.firebaseapp.com",
    projectId: "random-gaming-3beaa",
    storageBucket: "random-gaming-3beaa.appspot.com",
    messagingSenderId: "123002699660",
    appId: "1:123002699660:web:d4fd5c25421b3a2b4660a9",
    measurementId: "G-QF2XC4RVK4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
