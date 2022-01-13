import React from 'react';
import SongSource from '../songSource';
import { PromiseNoData } from '../promiseNoData';
import ExploreArtistsView from '../views/exploreArtistsView';
import promiseNoArtists from '../promiseNoArtists';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';


function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(props.model.genre);
    const [data, setData] = React.useState(props.model.artistsData);
    const [error, setError] = React.useState(props.model.artistsError);

    const [promiseSongs, setPromiseSongs] = React.useState(null);
    const [dataSongs, setDataSongs] = React.useState(null);
    const [errorSongs, setErrorSongs] = React.useState(null);
    let songs = [];


    React.useEffect(() => {
        const obs = () => {
            setPromise(props.model.genre);
            setData(props.model.artistsData);
            setError(props.model.artistsError);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <div>
            {promiseNoArtists(promise, data, error) ||(
                <ExploreArtistsView artist={data.data}
                    genre={promise}
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
