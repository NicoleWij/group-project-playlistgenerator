import { getDefaultNormalizer } from '@testing-library/react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getDoc, setDoc, doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from './firebasecd.js';
class Model {
    constructor() {
        this.currentGenre = null;
        this.observers = [];
        this.currentPlaylist = null;
        this.playlists = [];
        this.playlist = null;
        this.user = null;
        this.currentPlaylist = null;
        this.genreList = [
            {
                id: "132",
                name: "Pop",
                img: "https://images.freeimages.com/images/large-previews/056/concert-1189401.jpg",
                radio: "37151"
            },
            {
                id: "116",
                name: "Rap/HipHop",
                img: "https://images.freeimages.com/images/large-previews/61b/rip-the-mic-1-1502437.jpg",
                radio: "30991"
            },
            {
                id: "113",
                name: "Dance",
                img: "https://images.freeimages.com/images/large-previews/7ef/laser-effects-in-the-hague-1190079.jpg",
                radio: "36891"

            },
            {
                id: "165",
                name: "R&B",
                img: "https://images.freeimages.com/images/large-previews/c76/late-night-1550537.jpg",
                radio: "30881"

            },
            {
                id: "106",
                name: "Electro",
                img: "https://images.freeimages.com/images/large-previews/733/dj-dancing-1462436.jpg",
                radio: "30621"
            },
            {
                id: "144",
                name: "Reggae",
                img: "https://images.freeimages.com/images/large-previews/71c/bobby-1427554.jpg",
                radio: "31091"
            },
            {
                id: "129",
                name: "Jazz",
                img: "https://images.freeimages.com/images/large-previews/946/sax-player-1254283.jpg",
                radio: "31031"
            },
            {
                id: "464",
                name: "Metal",
                img: "https://images.freeimages.com/images/large-previews/42d/angel-drummer-1559333.jpg",
                radio: "30901"
            },
            {
                id: "169",
                name: "Soul and Funk",
                img: "https://images.freeimages.com/images/large-previews/253/con-alma-de-guitarra-ii-1427669.jpg",
                radio: "42402"
            },
            {
                id: "152",
                name: "Rock",
                img: "https://images.freeimages.com/images/large-previews/996/he-who-rocks-hardest-4-series-1466876.jpg",
                radio: "37765"
            }
        ];
    }


    setCurrentGenre(genre) {
        this.currentGenre = genre;
        this.currentGenreArtists = null;
        this.currentGenreError = null;
        this.notifyObservers();
    }

    savePlaylist(playlist) {
        this.playlist = playlist;
        const date = new Date()
        this.playlist.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        this.playlist.id = this.playlists.length;
        this.playlists.push({ id: this.playlist.id, name: this.playlist.playlistName, songs: this.playlist.songs, date: this.playlist.date });

        this.playlists = this.playlists.filter(
            (playlist) => playlist !== undefined
        );
        this.notifyObservers();
        const docRef = doc(db, "users", this.user.uid);
        (async () => {
            try {
                const userlist = this.playlists;
                await updateDoc(docRef, {
                    userPlaylists: userlist,
                });
            }
            catch (e) {
                console.error("Error adding playlist: ", e);
            }
        })();
    }

    setCurrentPlaylist(playlist) {
        this.currentPlaylist = playlist;
        this.notifyObservers();
    }

    setPlaylistName(name) {
        console.log(this.currentPlaylist)
        this.currentPlaylist.name = name;
        this.playlists = this.playlists.filter(
            (playlist) => playlist !== undefined
        );
        const docRef = doc(db, "users", this.user.uid);
        (async () => {
            try {
                const userlist = this.playlists;
                await updateDoc(docRef, {
                    userPlaylists: userlist,
                });
            }
            catch (e) {
                console.error("Error adding playlist: ", e);
            }
        })();
        console.log(this.playlists);
        this.notifyObservers();
    }

    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }
    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }
    notifyObservers() {
        this.observers.forEach(cb => {
            try { cb() } catch (e) { console.log(e) }
        });
    }

    LoginUser(email, password) {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                console.log(this.user.uid)
                this.getDataBaseInfo();
            })
            .catch
            ((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    getDataBaseInfo() {
        const docRef = doc(db, "users", this.user.uid);
        (async () => {
            const doc = await getDoc(docRef);
            const data = doc.data();
            data.userPlaylists.forEach(list => this.playlists.push(list));
            console.log(this.playlists);
            this.playlists = this.playlists.filter(
                (playlist) => playlist !== undefined
            );
            this.notifyObservers();
        })();
    }


    RegisterUser(email, password) {
        console.log(email, password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                (async () => {
                    try {
                        await setDoc(doc(db, "users", this.user.uid), {
                            userPlaylists: []
                        });
                    }
                    catch (e) {
                        console.error("Error adding playlist: ", e);
                    }
                })();

                this.LoginUser(email, password);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    logoutUser() {
        const auth = getAuth();
        this.playlists = [];
        signOut(auth)
            .then(() => {
                // Sign-out Success
                this.user = null;
                this.notifyObservers();
            })
            .catch((error) => {
                // Error occured
            });
    }

}







export default Model;