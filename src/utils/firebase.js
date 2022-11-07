// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8AUec3KgL5J679NiAYtt2hb46X5ZMx0E",
  authDomain: "animtask-f0d75.firebaseapp.com",
  projectId: "animtask-f0d75",
  storageBucket: "animtask-f0d75.appspot.com",
  messagingSenderId: "1031320712572",
  appId: "1:1031320712572:web:2c9925c5eef97b0d37e0f9",
  measurementId: "G-RLTM48L9HJ",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//Google Sign In

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Database

export const db = getFirestore();

//UserDatabase

export const createUserDocumentfromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //If user is new
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //Object that goes into user document
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};
//new Change 1
