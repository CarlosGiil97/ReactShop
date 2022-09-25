import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "padelreacttest.firebaseapp.com",
    projectId: "padelreacttest",
    storageBucket: "padelreacttest.appspot.com",
    messagingSenderId: process.env.SENDER_APP_API,
    appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
 
export { db };