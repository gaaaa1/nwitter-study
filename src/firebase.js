import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyABNsHenzXSQ4_FbEDtjalmX6ono_sp2vI",
    authDomain: "nwitter-cac5f.firebaseapp.com",
    projectId: "nwitter-cac5f",
    storageBucket: "nwitter-cac5f.appspot.com",
    messagingSenderId: "181870576773",
    appId: "1:181870576773:web:9ad4bb26c72ce55192d5ec"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);