import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9773B9FUqwTvDtlTylSqvZr8dTrgOq4Q",
    authDomain: "facebook-clone-b179f.firebaseapp.com",
    projectId: "facebook-clone-b179f",
    storageBucket: "facebook-clone-b179f.appspot.com",
    messagingSenderId: "509826284100",
    appId: "1:509826284100:web:b29e484b00fcc669fa5a11",
    measurementId: "G-Y24K2TSQ5K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db