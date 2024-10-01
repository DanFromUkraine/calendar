import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithRedirect, getAuth, getRedirectResult, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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

export function redirect_login() {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log({ user });
            console.log("kinda success");


            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            console.log("kinda fail");

            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export function createUserWithPassword({ email, password }, on_success, on_fail) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log({ user });
            on_success();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage);

            const type = errorMessage.includes("email") ? "email_err" : errorMessage.includes("password") ? "password_err" : "none";

            on_fail({ errorCode, type })
            console.log({ errorCode, errorMessage, error });


            // ..
        });
}


const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

// try {
//   const docRef = addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
// //   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

