import React from 'react';
import '../../css/topbarView.css';

function TopbarView(props) {
    return (
        <div className="topBar">
            <div className="disclaimer">Disclaimer: the api is limited to 50 calls per 5 seconds</div>
            <div className="top">
                <div className="topbuttons">
                    <button className={props.user===null?'b1 register' : 'hidden'} onClick={e => { window.location.hash = "#register" }}>Register</button>
                    <button className="b1 login" onClick={ e => {return window.location.hash = "#login",  props.logoutUser() }}>{props.user===null?'Login': 'Logout'}</button>
                </div>
            </div>
            <div className="head"><div className="headtxt" onClick={e => { window.location.hash = "#start" }}>PlaylistGenerator</div></div>

            <div className="nav">
                <button className="b2" onClick={e => { window.location.hash = "#exploreGenre" }}>Explore</button>
                <button className="b2" onClick={e => { return props.reset(), window.location.hash = "#generateStart" }}>Generate playlist</button>
                <button className="b2" onClick={e => { window.location.hash = "#myPlaylists" }}>My playlist</button>
            </div>
        </div>
    )
}


export default TopbarView;

