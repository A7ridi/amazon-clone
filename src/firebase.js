import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5EDKyEcHtZK0eHcmwdqi5waStRIia3w4",
  authDomain: "clone-ce4cc.firebaseapp.com",
  databaseURL: "https://clone-ce4cc.firebaseio.com",
  projectId: "clone-ce4cc",
  storageBucket: "clone-ce4cc.appspot.com",
  messagingSenderId: "771070571275",
  appId: "1:771070571275:web:cb02a571756d0df459e80e",
  measurementId: "G-2HL7CB1R3K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };