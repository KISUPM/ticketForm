// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhwD98g9hF8i8CfyA5ADKlpbnWRBgpa7s",
  authDomain: "tickettest-fd176.firebaseapp.com",
  projectId: "tickettest-fd176",
  storageBucket: "tickettest-fd176.appspot.com",
  messagingSenderId: "580753056778",
  appId: "1:580753056778:web:fdf8b36320d72dd2a46bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)