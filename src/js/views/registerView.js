import React from 'react';
import '../../css/registerView.css';

export function RegisterView(props) {
    return (
        <div className="contentbox">

            <div className="sidebox"><button className="buttonBack" onClick={e => {window.location.hash = "#exploreGenre"}}>←</button></div>

            <div className="midbox">

                <div className="formbox">
                    <div className="row1">Register</div>
                    <div className="row2">Enter Email</div>
                    <div className="row3"><input className="inputbox" onInput={e => props.getEmail(e.target.value)}></input></div>
                    <div className="row4">Create Password</div>
                    <div className="row5"><input className="inputbox" type="password" onInput={e => props.getPassword(e.target.value)}></input></div>
                    <div className="row6"><button className="regButton" onClick={e => { props.RegisterUser(); window.location.hash = "#myPlaylists"; }} >Register</button></div>
                </div>

                <div className="bottombox">
                    <div className="row21">Already have an account? Click the square to login</div>
                    <div className="row22"> <div className="boximg" onClick={e => { window.location.hash = "#login" }}></div></div>
                </div>
            </div>
        </div>
    )
}

export default RegisterView;