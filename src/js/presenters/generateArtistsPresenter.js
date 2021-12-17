import React from 'react';
import { AddedArtistsView, GenerateArtistsView, SearchResultsView, FullList} from '../views/generateArtistsView';
import PromiseNoRender from '../promiseNoRender';
import {PromiseNoData} from '../promiseNoData';
import SongSource from '../songSource';

function GenerateArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [dataArtists, setDataArtists] = React.useState(props.pmodel.artist);


    React.useEffect(() => {
        const obs = () => {
            setDataArtists(props.pmodel.artist);
        }
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {PromiseNoRender("not null", dataArtists, error) || (
            <AddedArtistsView artist={dataArtists}
                removeArtist={() => { props.pmodel.removeArtist() }} 
            />)}

            <GenerateArtistsView
                artist={dataArtists}
                onText={(search) => {
                    setData(null);
                    setError(null);
                    setPromise(SongSource.searchSongs(search)
                        .then((data) => setData(data))
                        .catch((error) => setError(error))
                    );
                }} />

            {PromiseNoData(promise, data, error) ||
                (<SearchResultsView searchResults={data.data}
                    addArtist={(artist) => { (props.pmodel.artist === null) ? props.pmodel.addArtist(artist) : <FullList />}}
                />)}


        </div>
    );

}

export default GenerateArtistsPresenter;