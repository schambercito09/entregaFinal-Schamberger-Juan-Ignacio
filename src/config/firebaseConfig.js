
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyCUOc5INty9qVJscGII_TzMfv-EoBNzR30",
  authDomain: "entrega-final-reactjs-9fabf.firebaseapp.com",
  projectId: "entrega-final-reactjs-9fabf",
  storageBucket: "entrega-final-reactjs-9fabf.appspot.com",
  messagingSenderId: "139699582573",
  appId: "1:139699582573:web:85c9d638d447207fa6f164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);