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
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebasecd';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
```

Run: 
```bash
$ npm install
```