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
export const db = getDatabase();

export function writeCompanyData(companyId, companyName) {
    set(ref(db, `company/${companyId}`), {
        companyName: companyName
    });
    set(ref(db, `company/${companyId}/userCodes`), {
        code: 140001//codigo do usuario
    });
}

export function writeGameData(gameId, gameName, companyId) {
    set(ref(db, `games/${gameId}`), {
        gameName: gameName,
        companyId: companyId
    });
}

export function writeNormalUserData(userId, name, email, password, birthYear) {
    set(ref(db, `users/normal/${userId}`), {
        username: name,
        email: email,
        password: password,
        birthYear: birthYear
    });
}

export function writeEnterpriseUserData(userId, name, email, password, companyName, companyCode, companyUserLevel, birthYear) {
    set(ref(db, `users/enterprise/${userId}`), {
        username: name,
        email: email,
        password: password,
        companyName: companyName,
        companyCode: companyCode,
        companyUserLevel: companyUserLevel,
        birthYear: birthYear
    });
}


/////////TESTE//////////
const companyCode = 10001;
const companyName = 'BeatConnect';
const companyUserLevel = 1;
const userId = 14001;
const name = 'Nicolas Kauer Toldo';
const email = 'nicolast0ld07@gmail.com';
const password = 'password'
const birthYear = 2006;

const gameId = 670001;
const gameName = 'Outlast';
const scenes = ['Administration', 'Prision_Block', 'Sewer', 'Male_Ward', 'courtyard', 'Female_Ward', 'Return_to_the_Administration_Block'];

writeCompanyData(companyCode, companyName);
writeEnterpriseUserData(userId, name, email, password, companyName, companyCode, companyUserLevel, birthYear);

var o = 0;
for (let p = 0; p <= 7; p++) {
    if (p === 0) {
        set(ref(db, `company/${companyCode}/games/${gameName}`), {
            gameId: gameId
        });
    }
    for (let i = 0; i <= 4; i++) {  
        set(ref(db, `company/${companyCode}/games/${gameName}/gameParts/${scenes[p]}/part${i}`), {
            heartBeat: 80,
            description: 'teste teste'
        });
    }
}

