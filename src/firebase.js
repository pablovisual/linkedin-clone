import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1hlP0oRa7p3g047M3dQ-qE109nBdscsQ",
    authDomain: "linkedin-clone-fbac6.firebaseapp.com",
    projectId: "linkedin-clone-fbac6",
    storageBucket: "linkedin-clone-fbac6.appspot.com",
    messagingSenderId: "1017423755109",
    appId: "1:1017423755109:web:6cc45b7057694ce8b8d38c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };