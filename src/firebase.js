import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    databaseURL: "https://clone-2c795.firebaseio.com",
    apiKey: "AIzaSyCxXZV-dMD2GEcrSKNh-2zHh9AaDk8OiFE",
    authDomain: "toyshop-dc8c0.firebaseapp.com",
    projectId: "toyshop-dc8c0",
    storageBucket: "toyshop-dc8c0.appspot.com",
    messagingSenderId: "257176777015",
    appId: "1:257176777015:web:5017e93af9683512216ab2",
    measurementId: "G-6KRB52GMRN"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };