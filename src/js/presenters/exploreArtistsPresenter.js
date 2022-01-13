import React from 'react';
import SongSource from '../songSource';
import { PromiseNoData } from '../promiseNoData';
import ExploreArtistsView from '../views/exploreArtistsView';
import promiseNoArtists from '../promiseNoArtists';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';


function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [genre, setGenre] = React.useState(props.model.currentGenre);

    const [promiseSongs, setPromiseSongs] = React.useState(null);
    const [dataSongs, setDataSongs] = React.useState(null);
    const [errorSongs, setErrorSongs] = React.useState(null);
    let songs = [];


    React.useEffect(() => {
        const obs = () => {
            setGenre(props.model.currentGenre)
            if (props.model.currentGenre !== null) {
                setPromise(
                    SongSource.getArtistsFromGenre(props.model.currentGenre.id)
                        .then((data) => setData(data))
                        .catch((error) => setError(error))
                )
            }
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            {promiseNoArtists(promise, data, error) || (console.log(data),
                <ExploreArtistsView artist={data.data}
                    genre={genre}
                    func={(id) => {
                        setPromiseSongs(
                            SongSource.getSongsFromArtist(id)
                                .then((dataSongs) => {
                                    setDataSongs(dataSongs);
                                })
                                .catch((errorSongs) => setErrorSongs(errorSongs)),
                        )
                    }} />
            )}
            {PromiseNoData(promiseSongs, dataSongs, errorSongs) ||
                (dataSongs.data.forEach(song => {
                    songs = [...songs, { name: song.title, musicSrc: song.preview, singer: song.artist.name, cover: song.album.cover_xl }]
                }),
                    <ReactJkMusicPlayer audioLists={
                        songs}
                        showDownload={false}
                        showThemeSwitch={false}
                    />
                )}
        </div>
    );
}




export default ExploreArtistsPresenter;
