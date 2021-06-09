import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAfJNS4lMo9lKjIn9Oc-j8hbh1wYHqgz6A",
    authDomain: "booksanta-29c10.firebaseapp.com",
    projectId: "booksanta-29c10",
    storageBucket: "booksanta-29c10.appspot.com",
    messagingSenderId: "1057004459170",
    appId: "1:1057004459170:web:e3e1a5cd5c1fe1367333fb"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
