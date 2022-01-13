import React from 'react';
import GeneratedPlaylistView from '../views/generatedPlaylistView';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';



function GeneratedPlaylistPresenter(props) {
    const [songs, setSongs] = React.useState(props.pmodel.songs);
    const [name, setName] = React.useState(props.pmodel.playlistName);
    const [currentSong, setCurrentSong] = React.useState(props.pmodel.currentSong);
    const [songToPlay, setSongToPlay] = React.useState([null]);
    let songArray = [];

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
            <GeneratedPlaylistView songs={songs}
                playlistName={name}
                setPlaylistName={(name) => props.pmodel.setPlaylistName(name)}
                playOrPause={(song) => (props.pmodel.setCurrentSong(song), console.log(props.pmodel.currentSong), setSongToPlay([props.pmodel.currentSong]))}
                playList={() => { setSongToPlay(songs)}}
                currentSong={currentSong}
                save={() => props.model.savePlaylist(props.pmodel)}
            />
            {console.log(songToPlay)}
            {songToPlay[0] === null || (
                songToPlay.forEach(song => {
                    songArray = [...songArray, { name: song.title, musicSrc: song.preview, singer: song.artist.name, cover: song.album.cover_xl }]
                }),
                console.log(songArray),
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

function Play(song) {
    // let songs = [];
    // songArray.forEach(song => {
    //     songs = [...songs, { name: song.title, musicSrc: song.preview, singer: song.artist.name, cover: song.album.cover_xl }]
    // });
    // console.log(songs);
    console.log(song);
    <ReactJkMusicPlayer
        audioLists={[{ name: song.title, musicSrc: song.preview, singer: song.artist.name, cover: song.album.cover_xl }]}
        showDownload={false}
        showThemeSwitch={false}
    />
    console.log("bottom")
}


export default GeneratedPlaylistPresenter;