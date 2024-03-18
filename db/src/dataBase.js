import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, get, set, ref, child } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAb_YrNbvv9Gx9Hz-QhKHnP5H9SMPpns_o",
  authDomain: "bc-test-89764.firebaseapp.com",
  databaseURL: "https://bc-test-89764-default-rtdb.firebaseio.com",
  projectId: "bc-test-89764",
  storageBucket: "bc-test-89764.appspot.com",
  messagingSenderId: "1087566198950",
  appId: "1:1087566198950:web:a785f29fc9ee9071aa9c67",
  measurementId: "G-8LM58C0NYE"
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();

    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}
