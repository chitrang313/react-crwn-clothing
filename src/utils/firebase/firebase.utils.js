import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collectionGroup,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA1QJ56ar_KBA7aSYiarUQmT3R03-6H9k",
  authDomain: "react-crwn-project.firebaseapp.com",
  projectId: "react-crwn-project",
  storageBucket: "react-crwn-project.appspot.com",
  messagingSenderId: "362663174713",
  appId: "1:362663174713:web:aadfd9b1c98271d5c263e8",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log("userAuth:", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("user creation error:", error.message);
    }
  }
  return userSnapShot;
};
