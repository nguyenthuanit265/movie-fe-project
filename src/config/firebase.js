import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDX-InzJG6ZgolmNistNA3LAVNbbyhYT8Q",
    authDomain: "movie-be-pro.firebaseapp.com",
    projectId: "movie-be-pro",
    storageBucket: "movie-be-pro.firebasestorage.app",
    messagingSenderId: "1046794397952",
    appId: "1:1046794397952:web:c49e998e6eae5710f4ebe5",
    measurementId: "G-GFGYDLCXN7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);