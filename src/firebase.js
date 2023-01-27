// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/**
 * The web app's Firebase configuration.
 *
 * For Firebase JS SDK v7.20.0 and later, measurementId is optional.
 */
export const firebaseConfig = {
  apiKey: "AIzaSyD9KeJ6rwIVOxwJYAfHlBms2hNjXa1X400",
  authDomain: "youssef-land-chat-react.firebaseapp.com",
  databaseURL:
    "https://youssef-land-chat-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "youssef-land-chat-react",
  storageBucket: "youssef-land-chat-react.appspot.com",
  messagingSenderId: "861324311111",
  appId: "1:861324311111:web:f5cddb7f9fdbccef050f62",
  measurementId: "G-W904FS2PZT",
};

/**
 * Initializes Firebase.
 */
export const app = initializeApp(firebaseConfig);

/**
 * Gets analytics from Firebase.
 */
export const analytics = getAnalytics(app);

/**
 * Gets Firestore from Firebase.
 */
export const firestore = getFirestore(app);
