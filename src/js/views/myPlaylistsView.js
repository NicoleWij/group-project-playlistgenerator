import React from 'react';
import '../../css/myPlaylistsView.css';

function MyPlaylistsView(props) {
    console.log(props.playlists)
    console.log("hej")
    return (
        <div className="playlistMenu">
            <div className="leftbox"><button className="buttonBack" onClick={e => { window.location.hash = "#start" }}>←</button></div>

            <div className="middlebox">
                <div className="toprow">
                    <div className="titletext">My playlists</div>
                    <div className="spacing"></div>
                </div>

                <table className="playlisttable">
                    <tbody>
                        <tr>
                            <td>Playlist</td>
                            <td>Date created</td>
                            <td>Length</td>
                        </tr>
                        {props.playlists.map(playlist => {
                            return (
                                <tr>
                                    <td>{playlist.name}<button className="pencil" onClick={e => { window.location.hash = "#playlist" }}>&#128393;</button></td>
                                    <td>{getDate(playlist.date.seconds)}</td>
                                    <td>{playlist.songs.length}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>

            </div>

            <div className="rightbox">  </div>

        </div>
    )
}

function getDate(timestamp){
    let date = new Date(timestamp);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

export default MyPlaylistsView;