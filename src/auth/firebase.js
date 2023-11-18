// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7CGzLM5RIBxG6jEYAVhJzA2poaGCXFc0",
  authDomain: "linktree-clone-5de22.firebaseapp.com",
  projectId: "linktree-clone-5de22",
  storageBucket: "linktree-clone-5de22.appspot.com",
  messagingSenderId: "25663607362",
  appId: "1:25663607362:web:e18f582d094cd5875cd3db",
  measurementId: "G-WTRF3GCHE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
