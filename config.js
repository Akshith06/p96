import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
      apiKey: "AIzaSyA0WEY5Xu_jIr_Fze20TeH02_Ky-TVoWu4",
    authDomain: "book-santa-ed11a.firebaseapp.com",
    projectId: "book-santa-ed11a",
    storageBucket: "book-santa-ed11a.appspot.com",
    messagingSenderId: "608047855894",
    appId: "1:608047855894:web:2ddb17614bf964b7e5f837",
    measurementId: "G-XML66JMS8J"
  };


// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
