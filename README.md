# PlaylistGenerator

Link to deployed app: https://playlistgenerator.web.app

## Setup

### Step 1, clone and install

```bash
$ git clone https://github.com/NicoleWij/group-project-playlistgenerator
$ cd group-project-playlistgenerator
$ npm install
```
### Step 2, api key 

 Get api key at: https://rapidapi.com/deezerdevs/api/deezer-1/  
 Create a file apiConfig.js and place it in src/js  
 Content of apiConfig.js:

```bash
export const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com";
export const API_KEY = API_KEY;
```
### Step 3, create a firebase app:

https://firebase.google.com/docs/build  
Create a file firebaseConfig.js and place it in src/js  
Content of firebaseConfig.js:

```bash
export const firebaseConfig = {
    //...
};
```

Run: 
```bash
$ npm install
```
Description of the project
The API used for the project: https://rapidapi.com/deezerdevs/api/deezer-1/


The application we made is a playlist generator which is used to create playlists for the user based on their preferred genre of music as well as a favorite artist. It has a log in function where a user can create an account that they can then log in with. All the users saved playlists will be saved on their account. 

When the user first enters the application, they can choose between the options “explore”, “generate playlist” and “my playlist”. 

•    The option “explore” will let the user explore the world of music where they can pick a genre, then explore music from artists in that genre. The user can jump between multiple songs from each artist.

•    The option “generate a playlist” will generate a playlist based on the kind of music the user likes. It first lets the user pick between different music genres, letting the user distribute a 100% between a variety of genres (Example: 40% classic pop music and 60% pop rock). The user can then pick a favorite artist of their choice, which will make it so that half of the playlist are songs from that artist as well as songs similar to theirs.

•    The option “my playlist” lets the user see their previous playlists in a list. When a playlist has been generated the user can change the name before saving it, but if the user changes their mind, they can change the names in the “my playlist” option. 

A third-party component was added in the form of a music player, used in the explore option when a user plays music from an artist.
https://www.npmjs.com/package/react-jinke-music-player