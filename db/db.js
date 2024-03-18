import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAb_YrNbvv9Gx9Hz-QhKHnP5H9SMPpns_o",
  authDomain: "bc-test-89764.firebaseapp.com",
  projectId: "bc-test-89764",
  storageBucket: "bc-test-89764.appspot.com",
  messagingSenderId: "1087566198950",
  appId: "1:1087566198950:web:4e17041d4413c0e4aa9c67",
  measurementId: "G-GKX5FQE616"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}