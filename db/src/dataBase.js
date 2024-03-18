import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth';
import { getFirestore, getDocs, collection } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAb_YrNbvv9Gx9Hz-QhKHnP5H9SMPpns_o",
    authDomain: "bc-test-89764.firebaseapp.com",
    projectId: "bc-test-89764",
    storageBucket: "bc-test-89764.appspot.com",
    messagingSenderId: "1087566198950",
    appId: "1:1087566198950:web:4e17041d4413c0e4aa9c67",
    measurementId: "G-GKX5FQE616"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

auth.onAuthStateChanged(user => {

});
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user!');
    }
});

