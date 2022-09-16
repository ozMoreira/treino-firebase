import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig  = {
    apiKey: "AIzaSyD66aTP-iW6yMMvFZ2nUmnK6Th685YKm6I",
    authDomain: "oz-2tdss.firebaseapp.com",
    projectId: "oz-2tdss",
    storageBucket: "oz-2tdss.appspot.com",
    messagingSenderId: "608854792753",
    appId: "1:608854792753:web:3e0f14d376f1255b925310",
    measurementId: "G-1L08XPK9WY"
};

firebase.initializeApp(firebaseConfig);

export { firebase };