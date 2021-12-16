import React from 'react';
import  MyPlaylistView  from '../views/myPlaylistsView';

function MyPlaylistsPresenter(props){
    const [playlists, setPlaylists] = React.useState(props.model.playlists);

    React.useEffect(() => {
        const obs = () => {
            setPlaylists(props.model.playlists)
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            {<MyPlaylistView playlists={playlists}/>}
        </div>
    );
}

export default MyPlaylistsPresenter;