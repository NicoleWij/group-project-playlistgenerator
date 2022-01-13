// import { connectFirestoreEmulator } from "firebase/firestore";

class PlaylistModel {
    constructor() {
        this.playlistName = null;
        this.chosenNumberOfSongs = 0;
        this.actualNumberOfSongs = 0;
        this.explicit = false;
        this.genres = [];
        this.songs = [];
        this.observers = [];
        this.artist = null;
        this.total = 0;
        this.currentSong = null;
        this.playlistDone = false;
    }

    resetPlaylist() {
        this.playlistName = null;
        this.chosenNumberOfSongs = 0;
        this.actualNumberOfSongs = 0;
        this.explicit = false;
        this.genres = [];
        this.songs = [];
        this.artist = null;
        this.total = 0;
        this.currentSong = null;
        this.playlistDone = false;
        this.notifyObservers();
    }

    addGenre(radioID, value, name) {
        console.log("radioId: ",  radioID, " Value:", value, " Name:", name );
        console.log("Checking value === 0")
        if (value === 0) {
            this.removeGenre(radioID);
            this.setTotalPercent();
            this.notifyObservers();
            return;
        }
        console.log("Checking if statement nr 2")

        if (this.genres.some(g => g.id === radioID)) {
        console.log("Went into statment nr 2")
            this.genres.find(g => g.id === radioID).value = (value / 100);
            this.setTotalPercent();
            this.notifyObservers();
            return;
        }
        console.log("After statement nr 2, setting some this")

        this.genres = [...this.genres, { id: radioID }];
        this.genres.find(x => x.id === radioID).value = (value / 100);
        this.genres.find(x => x.id === radioID).name = name;
        console.log("setTotalPercent")

        this.setTotalPercent();

        console.log("Notifying observers")

        this.notifyObservers();
    }

    removeGenre(radioID) {
        this.genres = this.genres.filter((genre) => genre.id !== radioID);
        this.notifyObservers();
    }

    setTotalPercent() {
        let total = 0;
        this.genres.forEach(genre => {
            total += genre.value;
        });
        this.total = total;
        this.notifyObservers();
    }

    setNumberOfSongs(length) {
        this.chosenNumberOfSongs = length;
        this.notifyObservers();
    }

    setActualNumberOfSongs(length) {
        this.actualNumberOfSongs += length;
        if (this.actualNumberOfSongs >= this.chosenNumberOfSongs) {
            return;
        }
        this.notifyObservers();
    }

    setExplicit(choice) {
        this.explicit = choice;
        this.notifyObservers();
    }

    setPlaylistName(name) {
        this.playlistName = name;
        this.notifyObservers();
    }

    setCurrentSong(song) {
        if (this.currentSong === song) {
            this.currentSong = null;
            this.notifyObservers();
            return;
        }
        this.currentSong = song;
        this.notifyObservers();
    }

    addSongsToPlaylist(arrayWithSongs) {
        if (this.songs.length >= this.chosenNumberOfSongs) {
            return;
        }
        this.songs = this.songs.concat(arrayWithSongs);
        this.playlistDone = true;

        this.notifyObservers();
    }

    addArtist(artist) {
        this.artist = artist;
        this.notifyObservers();
    }

    removeArtist() {
        this.artist = null;
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
    setcurrentSong(id) {
        if (this.currentSong === id) {
            return;
        }
        this.currentSong = id;
        this.notifyObservers();
    }
}

export default PlaylistModel;