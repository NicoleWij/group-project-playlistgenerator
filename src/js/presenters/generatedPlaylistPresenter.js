import React from 'react';
import GeneratedPlaylistView from '../views/generatedPlaylistView';


function GeneratedPlaylistPresenter(props) {
    const [songs, setSongs] = React.useState(props.pmodel.songs);
    const [name, setName] = React.useState(props.pmodel.playlistName);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);

    React.useEffect(() => {
        const obs = () => {
            setSongs(props.pmodel.songs)
            setName(props.pmodel.playlistName)
            setCurrentSong(props.pmodel.currentSong)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<GeneratedPlaylistView songs={songs}
                playlistName={name}
                setPlaylistName={(name) => props.pmodel.setPlaylistName(name)}
                playOrPause={(song) => { props.pmodel.setCurrentSong(song) }}
                currentSong={currentSong}
                save={() => props.model.savePlaylist(props.pmodel)}
            />}

        </div>
    );
}


export default GeneratedPlaylistPresenter;