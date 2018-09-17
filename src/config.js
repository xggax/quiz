import firebase from 'firebase';
import Rebase from 're-base';


// Initialize Firebase
 const firebaseInfo = firebase.initializeApp({
    apiKey: "AIzaSyBE2SPuH01dxz7tPJvmTY5jx6DbQtmCC2s",
    authDomain: "quiz-8b311.firebaseapp.com",
    databaseURL: "https://quiz-8b311.firebaseio.com",
    projectId: "quiz-8b311",
    storageBucket: "quiz-8b311.appspot.com",
    messagingSenderId: "902438624748"
  });

  const db = firebase.database(firebaseInfo);
  const config = Rebase.createClass(db);

  export const providers = {
    'facebook' : new firebase.auth.FacebookAuthProvider,
    'twitter': new firebase.auth.TwitterAuthProvider
  }


  export const auth = firebase.auth();
  export default config;