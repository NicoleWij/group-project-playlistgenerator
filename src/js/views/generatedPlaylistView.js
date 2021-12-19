import React from 'react';
import '../../css/playlistView.css';

function GeneratedPlaylistView(props) {
    console.log(props.songs)
    return (
        <div className="playlistMenu">
            <div className="leftbox"></div>

            <div className="middlebox">
                <div className="toprow">
                    <input type="text" className="titleText" placeholder="Edit Playlistname" onChange={e => props.setPlaylistName(e.target.value)} ></input>
                    <div className="savecontainer"><button className="save" disabled={props.playlistname === null} onClick={e => {props.save(); window.location.hash = "#myPlaylists"}}>Save</button></div>
                </div>

                <table className="playlisttable">
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Song</td>
                            <td>Artist</td>
                            <td>Album</td>
                            <td>Length</td>
                        </tr>
                        {props.songs.map(song => {
                            return (
                                <tr>
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


// &#128393; 
// &#9658;

export default GeneratedPlaylistView;