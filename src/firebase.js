import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjhrCrEwc828ZRHHz1iorG6sE_0SW--Vg",
    authDomain: "netflix-clone-ed372.firebaseapp.com",
    projectId: "netflix-clone-ed372",
    storageBucket: "netflix-clone-ed372.appspot.com",
    messagingSenderId: "9564989372",
    appId: "1:9564989372:web:4d4824cf544098c14d2db9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default  db ;

  