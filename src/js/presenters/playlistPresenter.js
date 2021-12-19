import React from 'react';
import PlaylistView from '../views/playlistView';

function PlaylistPresenter(props) {
    const [playlist, setPlaylist] = React.useState(props.model.currentPlaylist);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);
    const [name, setName] = React.useState(null);
    const [changeName, setChangeName] = React.useState(false);
    const [newName, setNewName] = React.useState(false);

    React.useEffect(() => {
        setChangeName(false)
        const obs = () => {
            setPlaylist(props.model.currentPlaylist)
            setCurrentSong(props.pmodel.currentSong)
            if (props.model.currentPlaylist !== null) {
                setName(props.model.currentPlaylist.name)
            }
        };
        props.model.addObserver(obs);
        props.pmodel.addObserver(obs);
        return () => { return props.model.removeObserver(obs), props.pmodel.removeObserver(obs) };
    }, []);

    return (
        <div>
            {console.log(name)}
            {playlist === null || <PlaylistView playlist={playlist}
                name={name}
                playOrPause={(song) => { props.pmodel.setCurrentSong(song) }}
                currentSong={currentSong}
                changeName={() => setChangeName(!changeName)} 
                change={changeName}
                setPlaylistName={(name) => setNewName(name)}
                saveName={() => { return props.model.setPlaylistName(newName), setChangeName(!changeName) }}/>}
        </div>
    );
}

export default PlaylistPresenter;