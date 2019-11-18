import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCoDntmZ-aVWu5t6NMl5V7djQjUSHKUJzs",
    authDomain: "ecom-react-db-ca4c9.firebaseapp.com",
    databaseURL: "https://ecom-react-db-ca4c9.firebaseio.com",
    projectId: "ecom-react-db-ca4c9",
    storageBucket: "ecom-react-db-ca4c9.appspot.com",
    messagingSenderId: "838509757324",
    appId: "1:838509757324:web:606036f217114c17d28ca9",
    measurementId: "G-J957F287Z6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;