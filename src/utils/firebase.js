import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAy40QYkKboeFUZbtNzFeA61j90UJ4AjHQ",
  authDomain: "forecastgraph.firebaseapp.com",
  projectId: "forecastgraph",
  storageBucket: "forecastgraph.appspot.com",
  messagingSenderId: "326746725110",
  appId: "1:326746725110:web:3819b4e0a80f74f4b06ad7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);