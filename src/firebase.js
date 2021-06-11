import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeNsbRS_oxggi7slUz42_lz_OdvgRCNJ4",
  authDomain: "netflix-a2f4b.firebaseapp.com",
  projectId: "netflix-a2f4b",
  storageBucket: "netflix-a2f4b.appspot.com",
  messagingSenderId: "778866327842",
  appId: "1:778866327842:web:f72af116977b7497f7a57b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
