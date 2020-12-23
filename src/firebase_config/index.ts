import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyChHFPctwRT-S3H6tu4TxoI8alN_BKqzZk",
  authDomain: "magazine-maker-23aa2.firebaseapp.com",
  projectId: "magazine-maker-23aa2",
  storageBucket: "magazine-maker-23aa2.appspot.com",
  messagingSenderId: "521651363534",
  appId: "1:521651363534:web:1ba725eeeba578a00efa9f",
  measurementId: "G-BX8VSC43Q9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();
export const projectDatabase = firebase.database();
export const projectFunctions = firebase.functions();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
