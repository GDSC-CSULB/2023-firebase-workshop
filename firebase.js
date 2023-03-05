// Core
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js'

// Add Firebase products that you want to use
// Use this link: https://firebase.google.com/docs/auth/web/password-auth
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'

// Your web app's Firebase configuration

/**** Normally this NEVER should be exposed ... ****/
const firebaseConfig = {
  apiKey: "AIzaSyCnHYDfZniOZW7pCJeXWTgs23nhdkp_vcM",
  authDomain: "gdsc-workshop-84b36.firebaseapp.com",
  projectId: "gdsc-workshop-84b36",
  storageBucket: "gdsc-workshop-84b36.appspot.com",
  messagingSenderId: "411528768939",
  appId: "1:411528768939:web:9c5085d169e0c7e51636ee"
};
/**** Normally this NEVER should be exposed ... ****/

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const handleSignOut = () => {

};
export const handleLogin = (email, password) => {
    
};
export const handleRegister = (email, password) => {
    
};