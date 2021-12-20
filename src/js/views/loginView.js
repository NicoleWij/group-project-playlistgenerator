import React from 'react';
import '../../css/loginView.css';

function LoginView(props) {
    return (
        <div className="contentbox">

            <div className="sidebox"><button className="buttonBack" onClick={e => {window.location.hash = "#exploreGenre"}}>←</button></div>

            <div className="midbox">

                <div className="formbox">
                    <div className="row1">Login</div>
                    <div className="row2">Email</div>
                    <div className="row3"><input className="inputbox" onInput={e => props.setEmail(e.target.value)}></input></div>
                    <div className="row4">Password</div>
                    <div className="row5"><input className="inputbox" type="password" onInput={e => props.setPassword(e.target.value)}></input></div>
                    <div className="row6"><button className="logButton" onClick={e => { props.LoginUser(); window.location.hash = "#myPlaylists"; }} >Log in</button></div>
                </div>

                <div className="bottombox">
                    <div className="row21">Don't have an account? Click the star to register</div>
                    <div className="row22"> <div className="starimg" onClick={e => { window.location.hash = "#register" }}>&#9733;</div></div>
                </div>
            </div>
            <button className="buttonBack" onClick={e => { props.audio.pause();window.location.hash = "#exploreGenre"}}>←</button>
        </div>
    )
}

export default LoginView;