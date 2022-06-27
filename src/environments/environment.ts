import { FirebaseApp, initializeApp } from "firebase/app";

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: "AIzaSyArRd6QlaV5lh3NvfIemDQ89lpYNYaMGAc",
  authDomain: "tunahan-atisman.firebaseapp.com",
  projectId: "tunahan-atisman",
  storageBucket: "tunahan-atisman.appspot.com",
  messagingSenderId: "211482986317",
  appId: "1:211482986317:web:abc8dd85646dfc26c41904",
  measurementId: "G-NKXZS8GQ5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

