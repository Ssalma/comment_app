import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYg9c7PNvacv3gEUKjdpNaZfALXLE75Pk",
  authDomain: "comment-app-9f9ce.firebaseapp.com",
  projectId: "comment-app-9f9ce",
  storageBucket: "comment-app-9f9ce.appspot.com",
  messagingSenderId: "777336045547",
  appId: "1:777336045547:web:bcd88c8402d107be6fe3ae",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
