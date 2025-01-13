import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDWQ0Fi6zbkjuNHF62qyaQppFk07yoj6s",
    authDomain: "webfinal2425.firebaseapp.com",
    projectId: "webfinal2425",
    storageBucket: "webfinal2425.firebasestorage.app",
    messagingSenderId: "678760838706",
    appId: "1:678760838706:web:7562925a2266d944c66e2b",
    measurementId: "G-6XP0W4TWJJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);