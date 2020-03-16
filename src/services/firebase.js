import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC3LX4RmcOgBP-8rpSTq3sFFu0MZK2qgAc",
    authDomain: "shopping-reactapp.firebaseapp.com",
    databaseURL: "https://shopping-reactapp.firebaseio.com",
    projectId: "shopping-reactapp",
    storageBucket: "shopping-reactapp.appspot.com",
    messagingSenderId: "64252760705",
    appId: "1:64252760705:web:253bd1cced7a2b04eb3380",
    measurementId: "G-46J0R191D8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();

  export default firebase;