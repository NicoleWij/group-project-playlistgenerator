import React from 'react';
import PlaylistView from '../views/playlistView';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

function PlaylistPresenter(props) {
    const [playlist, setPlaylist] = React.useState(props.model.currentPlaylist);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);
    const [name, setName] = React.useState(null);
    const [changeName, setChangeName] = React.useState(false);
    const [newName, setNewName] = React.useState(false);
    const [songToPlay, setSongToPlay] = React.useState([null]);
    let songArray = [];

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
        return () => { return (props.model.removeObserver(obs), props.pmodel.removeObserver(obs)) };
    }, [props.pmodel, props.model]);

    return (
        <div>
            {playlist === null || <PlaylistView playlist={playlist}
                name={name}
                playSong={(song) => {return (props.pmodel.setCurrentSong(song), setSongToPlay([props.pmodel.currentSong]))}}
                playList={() => { setSongToPlay(playlist.songs) }}
                currentSong={currentSong}
                changeName={() => setChangeName(!changeName)} 
                change={changeName}
                setPlaylistName={(name) => setNewName(name)}
                saveName={() => { return (props.model.setPlaylistName(newName), setChangeName(!changeName)) }}/>}

                {songToPlay[0] === null || (
                songToPlay.forEach(song => {
                    songArray = [...songArray, { name: song.title, musicSrc: song.preview, singer: song.artist.name, cover: song.album.cover_xl }]
                }),
                <ReactJkMusicPlayer
                    clearPriorAudioLists
                    audioLists={songArray}
                    showDownload={false}
                    showThemeSwitch={false}
                />
            )}
        </div>
    );
}

export default PlaylistPresenter;