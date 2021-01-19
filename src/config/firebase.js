import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCP3-VQBbuh6k-M7o7YSSoSWV3KzyrcQKk",
    authDomain: "new-web-app-96561.firebaseapp.com",
    databaseURL: "https://new-web-app-96561.firebaseio.com",
    projectId: "new-web-app-96561",
    storageBucket: "new-web-app-96561.appspot.com",
    messagingSenderId: "954831433767",
    appId: "1:954831433767:web:9e4f29a90b65193c4d9e02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();

  export const storage = firebase.storage();