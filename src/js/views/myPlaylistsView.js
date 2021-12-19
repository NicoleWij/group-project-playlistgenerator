import React from 'react';
import '../../css/myPlaylistsView.css';

function MyPlaylistsView(props) {
    console.log(props.playlists)
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
                                <tr key={`${playlist.id}`} onClick={e => { return props.setCurrent(playlist), window.location.hash = "#playlist" }}>
                                    <td>{playlist.name}</td>
                                    <td>{playlist.date}</td>
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

export default MyPlaylistsView;