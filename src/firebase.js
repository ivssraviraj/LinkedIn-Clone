import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCzvIYDzZFkwvC8ZNk6_l_j4vtIzB0A7yA",
    authDomain: "linkedin-clone-5f0b4.firebaseapp.com",
    projectId: "linkedin-clone-5f0b4",
    storageBucket: "linkedin-clone-5f0b4.appspot.com",
    messagingSenderId: "275888272185",
    appId: "1:275888272185:web:e98a728545a72206cb2ee8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;