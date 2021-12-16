import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
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
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    RegisterUser(email, password) {
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
