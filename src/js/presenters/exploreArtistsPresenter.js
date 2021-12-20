import React from 'react';
import SongSource from '../songSource';
import {PromiseNoData} from '../promiseNoData';
import ExploreArtistsView from '../views/exploreArtistsView';
import promiseNoArtists from '../promiseNoArtists';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


function ExploreArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [genre, setGenre] = React.useState(props.model.currentGenre);
    
    const [promiseSongs, setPromiseSongs] = React.useState(null);
    const [dataSongs, setDataSongs] = React.useState(null);
    const [errorSongs, setErrorSongs] = React.useState(null);



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
            {PromiseNoData(promiseSongs, dataSongs, errorSongs) || <ReactJkMusicPlayer audioLists={
                [{name: dataSongs.data[0].title,musicSrc: dataSongs.data[0].preview, singer: dataSongs.data[0].artist.name},
                { name: dataSongs.data[1].title,musicSrc: dataSongs.data[1].preview, singer: dataSongs.data[0].artist.name},
                {name: dataSongs.data[2].title,musicSrc: dataSongs.data[2].preview, singer: dataSongs.data[0].artist.name},
                {name: dataSongs.data[3].title,musicSrc: dataSongs.data[3].preview, singer: dataSongs.data[0].artist.name},
                {name: dataSongs.data[4].title,musicSrc: dataSongs.data[4].preview, singer: dataSongs.data[0].artist.name}]}
                showDownload={false}
                showThemeSwitch={false}
            />
            }
        </div>
    );
}




export default ExploreArtistsPresenter;
