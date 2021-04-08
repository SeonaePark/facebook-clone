import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiLX8eChimJ-rw_BaadRyc7w2-4rWkOHk",
    authDomain: "facebook-clone-c94e5.firebaseapp.com",
    projectId: "facebook-clone-c94e5",
    storageBucket: "facebook-clone-c94e5.appspot.com",
    messagingSenderId: "822868153242",
    appId: "1:822868153242:web:0d1c92029c29e740656023",
    measurementId: "G-2SS4SSKZHL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;