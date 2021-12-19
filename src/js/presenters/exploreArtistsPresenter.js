import React from 'react';
import SongSource from '../songSource';
import {PromiseNoData} from '../promiseNoData';
import { ExploreArtistsView, StopMusic } from '../views/exploreArtistsView';
import promiseNoArtists from '../promiseNoArtists';


function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [genre, setGenre] = React.useState(props.model.currentGenre);
    

    const [promiseSongs, setPromiseSongs] = React.useState(null);
    const [dataSongs, setDataSongs] = React.useState(null);
    const [errorSongs, setErrorSongs] = React.useState(null);

    const [audio, setAudio] = React.useState(null);
    const [dataIndex, setDataIndex] = React.useState(0);
    let index = 0;


    React.useEffect(() => {
        const obs = () => {
            setGenre(props.model.currentGenre)
            if(props.model.currentGenre !== null){
                setPromise(
                    SongSource.getArtistsFromGenre(props.model.currentGenre.id)
                        .then((data) => setData(data))
                        .catch((error) => setError(error))
                )
            }
            setDataIndex(0);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            {promiseNoArtists(promise, data, error) || (console.log(data),
                <ExploreArtistsView artist={data.data}
                    genre={genre}
                    audio={audio}
                    func={(id) => {
                        setPromiseSongs(
                            SongSource.getSongsFromArtist(id)
                                .then((dataSongs) => {
                                    setDataSongs(dataSongs);
                                    if (dataSongs.error === undefined) {
                                        setAudio(playMusic(dataSongs.data, index));
                                    }
                                })
                                .catch((errorSongs) => setErrorSongs(errorSongs)),
                        )
                    }} />
            )}
            {PromiseNoData(promiseSongs, dataSongs, errorSongs) || <StopMusic audio={audio}
                song={dataSongs.data[dataIndex]}
                nextSong={() => {
                    (dataIndex < 4) ? setDataIndex(dataIndex + 1) : setDataIndex(0);
                    setAudio(playMusic(dataSongs.data, dataIndex + 1))
                }}
                musicStopped={() => setAudio(null)}
            />
            }
        </div>
    );
}

function playMusic(songs, index) {
    if (index === 5) {
        index = 0;
    }
    const audio = new Audio();
    audio.src = songs[index].preview

    console.log(audio)
    audio.play();
    return audio;
}



export default ExploreArtistsPresenter;
