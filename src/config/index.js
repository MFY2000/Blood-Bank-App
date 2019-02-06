import * as firebase from 'firebase';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXteEgOWM1cy5cuP-2NMsLig9W5skT7zc",
    authDomain: "blood-bank-app-12345.firebaseapp.com",
    databaseURL: "https://blood-bank-app-12345.firebaseio.com",
    projectId: "blood-bank-app-12345",
    storageBucket: "blood-bank-app-12345.appspot.com",
    messagingSenderId: "600020747722"
  };
    firebase.initializeApp(config);