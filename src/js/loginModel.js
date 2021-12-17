import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getDoc, setDoc, doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfig.js';

class LoginModel {
    constructor() {
        this.user = null;
    }

    LoginUser(email, password) {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                console.log(this.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    RegisterUser(email, password) {
        console.log(email, password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    UserPlaylist() {
    }

    logoutUser() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out Succes
            })
            .catch((error) => {
                // Error occured
            });
    }
}

export default LoginModel;
