import React from 'react';
import '../../css/startView.css';

function StartView(props) {
    return (
        <div className="menu">
            <div className="menuItem">
                <div className="buttonLeft" onClick={e => {window.location.hash = "#exploreGenre"}}>
                    Explore
                </div>
            </div>
            <div className="menuItem">
                <div className="midButton"onClick={e => {window.location.hash = "#generateStart"}}>
                    Generate Playlist
                </div>
            </div>
            <div className="menuItem">
                <div className="buttonRight"onClick={e => {window.location.hash = "#myPlaylists"}}>
                    My Playlists
                </div>
            </div>
        </div>

    )
}

export default StartView;