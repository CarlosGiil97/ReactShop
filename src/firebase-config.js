import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDW1KywvLixCTUwr4I_B9M5tBMq-q-jfuY",
    authDomain: "padelreacttest.firebaseapp.com",
    projectId: "padelreacttest",
    storageBucket: "padelreacttest.appspot.com",
    messagingSenderId: "679573049752",
    appId: "1:679573049752:web:dac0441ddd9a2da9aa9bed"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
 
export { db };