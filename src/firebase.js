import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCJuNBafj6crpPUdP9uaIg0yGKGSlE4HUo",
  authDomain: "m-city100789.firebaseapp.com",
  databaseURL: "https://m-city100789.firebaseio.com",
  projectId: "m-city100789",
  storageBucket: "m-city100789.appspot.com",
  messagingSenderId: "101387485632",
  appId: "1:101387485632:web:26e6d20ce63eebe5fc8825",
  measurementId: "G-ZFK07SBN4X"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches
}
