// Core
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'
import { toastError, toastSuccess } from "./frontend.js"

// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnHYDfZniOZW7pCJeXWTgs23nhdkp_vcM",
  authDomain: "gdsc-workshop-84b36.firebaseapp.com",
  projectId: "gdsc-workshop-84b36",
  storageBucket: "gdsc-workshop-84b36.appspot.com",
  messagingSenderId: "411528768939",
  appId: "1:411528768939:web:9c5085d169e0c7e51636ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const handleSignOut = () => {
    signOut(auth).then(() => {
        // Re-draw the page
        toastError("See you next time!");
    }).catch((error) => {
        toastError(error);
    });
}

export const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user)toastSuccess("You are successfully logged in!");
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toastError(`${errorCode}: ${errorMessage}`);
        });
};

export const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user)toastSuccess("You are successfully signed up!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toastError(`${errorCode}: ${errorMessage}`);
        });
};