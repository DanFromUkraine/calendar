import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithRedirect, getAuth, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCafBSAuQMeoGQlQu7Czulns1ZdQiih3Kg",
    authDomain: "calendar-562a6.firebaseapp.com",
    projectId: "calendar-562a6",
    storageBucket: "calendar-562a6.appspot.com",
    messagingSenderId: "56429468635",
    appId: "1:56429468635:web:8af475deda6aa45da3e5fe",
    measurementId: "G-N9LW3N455H"
};

const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.email');

const auth = getAuth();
auth.useDeviceLanguage();




export function createUserWithPassword({ email, password }, on_success, set_error_str) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            set_error_str("")
            on_success();
        })
        .catch((error) => {
            const errorMessage = error.message;
            set_error_str(errorMessage);
        });
}

export function signInWithPassword({ email, password }, on_success, set_error_str) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            set_error_str("")
            on_success();
        })
        .catch((error) => {
            const errorMessage = error.message;
            set_error_str(errorMessage)
        });
}

