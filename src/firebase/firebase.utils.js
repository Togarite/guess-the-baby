import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDl3svFzDNBmv6isAk8k-K3hDvzfz7UKrU",
  authDomain: "guess-the-baby.firebaseapp.com",
  databaseURL: "https://guess-the-baby.firebaseio.com",
  projectId: "guess-the-baby",
  storageBucket: "guess-the-baby.appspot.com",
  messagingSenderId: "588118820236",
  appId: "1:588118820236:web:b0c7e60238487505a142a9",
  measurementId: "G-KFN1916022"
};

// load firebase with above config...
firebase.initializeApp(config);

// expose auth and firestore for later use elsewhere in app...
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google auth...
const googleAuth = new firebase.auth.GoogleAuthProvider();
googleAuth.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuth); // expose sign in with google function...

export default firebase;
