// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDIAnPsdmhm9CvSq0gdE-b3c9LiM1HXvzs",
    authDomain: "authproject-4d87a.firebaseapp.com",
    projectId: "authproject-4d87a",
    storageBucket: "authproject-4d87a.appspot.com",
    messagingSenderId: "889161876373",
    appId: "1:889161876373:web:15ffebcf7f213429d26c9c",
    measurementId: "G-VMNQEY1X12"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    export default firebase;