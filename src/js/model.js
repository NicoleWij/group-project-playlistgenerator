
class Model {
    constructor() {
        this.currentGenre = null;
        this.observers = [];
        this.currentPlaylist = "1";
        this.playlists = [];
        console.log("halloj");
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
        this.playlists = [...this.playlists, playlist];
        this.playlists.find(p => p.name === playlist.name).date = new Date();
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

}

export default Model;