const firebase = require("firebase/app");
require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyATqm5NCd7blhyT0ohlZMsVOD3_7iPpROs",
  authDomain: "shop-online-c370a.firebaseapp.com",
  databaseURL: "https://shop-online-c370a.firebaseio.com",
  projectId: "shop-online-c370a",
  storageBucket: "shop-online-c370a.appspot.com",
  messagingSenderId: "701537478348",
  appId: "1:701537478348:web:4b2c8baeb58b939a994469",
  measurementId: "G-6VT51428VV"
};
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);