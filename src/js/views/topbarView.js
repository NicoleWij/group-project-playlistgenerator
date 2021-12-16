import React from 'react';
import '../../css/topbarView.css';

function TopbarView() {
    return (
        <div className="topBar">
            <div className="disclaimer">Disclaimer: the api is limited to 50 calls per 5 seconds</div>
            <div className="top">
                <div className="topbuttons">
                    <button className="b1 register" onClick={e => { window.location.hash = "#register" }}>Register</button>
                    <button className="b1 login" onClick={e => { window.location.hash = "#login" }}>Log in</button>
                </div>
            </div>
            <div className="head">PlaylistGenerator</div>

            <div className="nav">
                <button className="b2" onClick={e => { window.location.hash = "#exploreGenre" }}>Explore</button>
                <button className="b2" onClick={e => { window.location.hash = "#generateStart" }}>Generate playlist</button>
                <button className="b2" onClick={e => { window.location.hash = "#myPlaylists" }}>My playlist</button>
            </div>
        </div>
        // <div className="bottomBar"></div>
    )
}


export default TopbarView;

