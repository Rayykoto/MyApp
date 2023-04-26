import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default App;