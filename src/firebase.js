import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWwYm6LT3FBKrnL7UxeLZ1ps-a4yNFC4Q",
    authDomain: "velvet-app-f60ad.firebaseapp.com",
    projectId: "velvet-app-f60ad",
    storageBucket: "velvet-app-f60ad.appspot.com",
    messagingSenderId: "57404725299",
    appId: "1:57404725299:web:ac2ee74c18701967a2ab46"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};