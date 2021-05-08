import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA135qslBsCpfxlB3SmOzpBKuHv7VxCpQM",
  authDomain: "crwn-db-a00d5.firebaseapp.com",
  projectId: "crwn-db-a00d5",
  storageBucket: "crwn-db-a00d5.appspot.com",
  messagingSenderId: "270424334810",
  appId: "1:270424334810:web:c024328e7600e8f89160e3",
  measurementId: "G-0WLPNY8QJ3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
