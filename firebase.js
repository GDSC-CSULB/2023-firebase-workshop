// Core
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence  } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'
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

// Frontend
function fireError(text){
    Toastify({
    text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "rgb(220 38 38)",
    },
    onClick: function(){} // Callback after click
    }).showToast(); 
}

function fireSuccess(text){
    Toastify({
    text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "rgb(22 163 74)",
    },
    onClick: function(){} // Callback after click
    }).showToast(); 
}

export function stickyLogin(){
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


export const handleSignOut = () => {
    signOut(auth).then(() => {
        // Re-draw the page
    }).catch((error) => {
        fireError(error);
    });
}

export const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user)fireSuccess("You are successfully logged in!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            fireError(`${errorCode}: ${errorMessage}`);
            // ..
        });
};

export const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user)fireSuccess("You are successfully signed up!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            fireError(`${errorCode}: ${errorMessage}`);
            // ..
        });
};