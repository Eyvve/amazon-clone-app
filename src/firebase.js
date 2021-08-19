import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoxhAbjrkVNmrJTPJF7JxZcHB6WAv-p9I",
    authDomain: "clone-ee23e.firebaseapp.com",
    projectId: "clone-ee23e",
    storageBucket: "clone-ee23e.appspot.com",
    messagingSenderId: "875878599296",
    appId: "1:875878599296:web:0ed97c57ead917c16c3465",
    measurementId: "G-L57VJE6BST"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};