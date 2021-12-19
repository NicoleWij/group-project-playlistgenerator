// import { connectFirestoreEmulator } from "firebase/firestore";

class PlaylistModel {
    constructor() {
        this.playlistName = null;
        this.chosenNumberOfSongs = 0;
        this.actualNumberOfSongs = 0;
        this.explicit = false;
        this.genres = [];
        this.currentSong = null;
        this.songs = [];
        this.observers = [];
        this.artist = null;
        this.total = 0;
        this.currentSong = null;
        this.currentAudio = null;
        this.playlistDone = false;
    }

    resetPlaylist() {
        this.playlistName = null;
        this.chosenNumberOfSongs = 0;
        this.actualNumberOfSongs = 0;
        this.explicit = false;
        this.genres = [];
        this.currentSong = null;
        this.songs = [];
        this.artist = null;
        this.total = 0;
        this.currentSong = null;
        this.currentAudio = null;
        this.playlistDone = false;
        this.notifyObservers();
    }

    addGenre(radioID, value, name) {

        if (value === 0) {
            console.log("remove")
            this.removeGenre(radioID);
            this.setTotalPercent();
            return;
        }
        if (this.genres.some(g => g.id === radioID)) {
            this.genres.find(g => g.id === radioID).value = (value / 100);
            this.setTotalPercent();
            return;
        }

        this.genres = [...this.genres, { id: radioID }];
        this.genres.find(x => x.id === radioID).value = (value / 100);
        this.genres.find(x => x.id === radioID).name = name;
        console.log(this.genres);
        this.setTotalPercent();
        console.log(this.total)


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
        console.log(this.actualNumberOfSongs)
        this.notifyObservers();
    }

    setExplicit(choice) {
        console.log(choice)
        this.explicit = choice;
        console.log(this.explicit);
        this.notifyObservers();
    }

    setPlaylistName(name) {
        this.playlistName = name;
        this.notifyObservers();
    }

    setCurrentSong(song) {
        if (this.currentSong === song) {
            this.removeCurrentAudio();
            return;
        }
        if (this.currentAudio !== null) {
            this.removeCurrentAudio();
        }
        this.currentSong = song;
        this.setCurrentAudio(song);
        this.notifyObservers();
    }

    setCurrentAudio(song) {
        this.currentAudio = new Audio();
        this.currentAudio.src = song.preview;
        this.currentAudio.play();
        this.notifyObservers();
    }

    removeCurrentAudio() {
        this.currentAudio.pause();
        this.currentSong = null;
        this.notifyObservers();
    }

    addSongsToPlaylist(arrayWithSongs) {
        console.log(this.chosenNumberOfSongs)
        if (this.songs.length >= this.chosenNumberOfSongs) {
            return;
        }
        this.songs = this.songs.concat(arrayWithSongs);
        console.log(this.actualNumberOfSongs)
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