import React from 'react';
import PlaylistView from '../views/playlistView';

function PlaylistPresenter(props) {
    const [playlist, setPlaylist] = React.useState(props.model.currentPlaylist);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);

    React.useEffect(() => {
        const obs = () => {
            setPlaylist(props.model.currentPlaylist)
            setCurrentSong(props.pmodel.currentSong)
        };
        props.model.addObserver(obs);
        props.pmodel.addObserver(obs);
        return () => {return props.model.removeObserver(obs), props.pmodel.removeObserver()};
    }, []);

    return (
        <div>
            {playlist === null || <PlaylistView playlist={playlist}
                playOrPause={(song) => { props.pmodel.setCurrentSong(song) }}
                currentSong={currentSong}
                resetName={() => props.pmodel.setPlaylistName(null)}/>}
        </div>
    );
}

export default PlaylistPresenter;