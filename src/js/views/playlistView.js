import React from 'react';
import '../../css/playlistView.css';

function PlaylistView(props) {
    return (
        <div className="playlistMenu">
            <div className="leftbox">
                <button className="buttonBack" onClick={e => {
                    window.location.hash = "#myPlaylists"
                }}>←</button>
            </div>

            <div className="middlebox">
                <div className="topr">
                    <div type="text" className="titleText" >{props.name}
                        <button className="titleText" onClick={e => props.changeName()}>&#128393;</button>
                    </div>
                    <input className={props.change?"input":"hidden"} onChange={e => props.setPlaylistName(e.target.value)}></input>
                    <button className={props.change?"saveName":"hidden"} onClick={e => props.saveName()}>Save</button>
                </div>

                <table className="playlisttable">
                    <tbody>
                        <tr>
                            <td>Song</td>
                            <td>Artist</td>
                            <td>Album</td>
                            <td>Length</td>
                        </tr>
                        {props.playlist.songs.map(song => {
                            return (
                                <tr key={song.id}>
                                    <td id="name" className="playButton" onClick={e => {
                                        props.playOrPause(song);
                                    }}>{song === props.currentSong ? "◼" : "▶"}</td>
                                    <td>{tooLong(song.title) + (song.explicit_lyrics ? "🅴" : "")}</td>
                                    <td>{tooLong(song.artist.name)}</td>
                                    <td>{tooLong(song.album.title)}</td>
                                    <td>{(song.duration / 60).toFixed(0)}:{addZero(song.duration % 60)}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>

            </div>

            <div className="rightbox">  </div>

        </div>
    )
}


function addZero(number) {
    return number < 10 ? "0" + number : number;
}

function tooLong(string) {
    return string.length > 20 ? string.slice(0, 40) + "..." : string;
}



export default PlaylistView;