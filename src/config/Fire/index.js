import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBwASoC1zjVw00293qNDjczBbxHvrGxcL8",
    authDomain: "my-therapist-01.firebaseapp.com",
    projectId: "my-therapist-01",
    storageBucket: "my-therapist-01.appspot.com",
    messagingSenderId: "857125955082",
    appId: "1:857125955082:web:242c9da0750e752f1fe1f3",
    measurementId: "G-YGM7L9BCY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const Fire = getAuth(app);

export default Fire
