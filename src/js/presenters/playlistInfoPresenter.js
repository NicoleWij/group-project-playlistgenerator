import React from 'react';
import SongSource from '../songSource';
import { PlaylistInfoView, SeePlaylist } from '../views/playlistInfoView';
import { PlaylistDone } from '../promiseNoData';

function PlaylistInfoPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [promiseArtist, setPromiseArtist] = React.useState(null);
    const [dataArtist, setDataArtist] = React.useState(null);
    const [errorArtist, setErrorArtist] = React.useState(null);

    const [genres, setGenres] = React.useState(props.pmodel.genres);
    const [artist, setArtist] = React.useState(props.pmodel.artist);
    const [amount, setAmount] = React.useState(props.pmodel.chosenNumberOfSongs);
    const [explicit, setExplicit] = React.useState(props.pmodel.explicit);
    const [amountOfSongs, setAmountOfSongs] = React.useState(props.pmodel.songs.length);

    const [generated, setGenerated] = React.useState(props.pmodel.playlistDone);

    let copy = [];
    for (let i = 0; i < props.pmodel.chosenNumberOfSongs; i++) {
        copy.splice(0,0,undefined)
        
    }

    React.useEffect(() => {
        const obs = () => {
            setGenres(props.pmodel.genres)
            setArtist(props.pmodel.artist)
            setAmount(props.pmodel.chosenNumberOfSongs)
            setExplicit(props.pmodel.explicit)
            setAmountOfSongs(props.pmodel.songs.length)
            setGenerated(props.pmodel.playlistDone)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<PlaylistInfoView genres={genres}
                artist={artist}
                amount={amount}
                explicit={explicit}
                amountOfSongs={amountOfSongs}
                generated={generated}
                generateFromRadio={() => {
                    props.pmodel.genres.map(genre => {
                        let array = []
                        setPromise(
                            SongSource.getTracklistFromRadio(genre.id)
                                .then((data) => {
                                    setData(data);
                                    console.log(data)
                                    if (data.error === undefined) {
                                        array = pickSongs(data.data, genre.value, props.pmodel.chosenNumberOfSongs, props.pmodel.explicit);
                                        for (let i = 0; i < array.length; i++) {
                                            copy.splice(0,0,array[i]);
                                        }
                                        if (copy[props.pmodel.chosenNumberOfSongs/2] !== undefined) {
                                            props.pmodel.addSongsToPlaylist(copy.filter(x => x !== undefined))
                                        }
                                    }
                                })
                                .catch((error) => setError(error)),
                        )
                    })
                }}
                generateFromArtist={() => {
                    let array = []
                    setPromiseArtist(
                        SongSource.getTracklistFromArtist(props.pmodel.artist.id)
                            .then((data) => {
                                setDataArtist(data);
                                console.log(data)
                                if (data.error === undefined) {
                                    array = pickSongs(data.data, 1, props.pmodel.chosenNumberOfSongs, props.pmodel.explicit);
                                    for (let i = 0; i < array.length; i++) {
                                        copy.splice(props.pmodel.chosenNumberOfSongs/2,0,array[i]);
                                    }
                                    if (copy[props.pmodel.chosenNumberOfSongs/2] !== undefined) {
                                        props.pmodel.addSongsToPlaylist(copy.filter(x => x !== undefined))
                                    }
                                };
                            })
                            .catch((error) => setErrorArtist(error))
                    )
                }}
            />}
            {
                PlaylistDone(promise, data, error) ||
                PlaylistDone(promiseArtist, dataArtist, errorArtist) ||
                <div><SeePlaylist chosenAmount={amount}
                    actualAmount={amountOfSongs} /></div>
            }
        </div>
    );
}

function pickSongs(arrayWithSongs, percentage, numberOfSongs, explicit) {
    let songs = [];
    let amount = (percentage * (numberOfSongs / 2));
    let i = 0;

    if (!explicit) {
        let copy = arrayWithSongs.filter(s => !s.explicit_lyrics);
        if(copy.length < amount)
            amount = copy.length

        for (let i = 0; copy[i] !== undefined && i < amount ; i++) {
            songs[i] = copy[i];   
        }
    } else {
        while (i < amount) {
            songs[i] = arrayWithSongs[i];
            i++;
        }
    }
    console.log(songs)
    return songs;
}


export default PlaylistInfoPresenter;