import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWOYbYzJoZdqtoUwKQ_jH4RrCPe8gl1DM",
  authDomain: "netflix-clone-4a2da.firebaseapp.com",
  projectId: "netflix-clone-4a2da",
  storageBucket: "netflix-clone-4a2da.appspot.com",
  messagingSenderId: "150763795818",
  appId: "1:150763795818:web:867f8ff894fcce22d56113",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
