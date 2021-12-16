import React from 'react';
import "../../css/playlistInfo.css";
import '../../css/button.css';

function PlaylistInfoView(props) {
    return (
        <div className="playlistInfoDiv">
            <button className="buttonBack" onClick={e => { window.location.hash = "#generateArtists" }}>←</button>

            <table className="playlistInfo">
                <tr><td>Your Genres:</td>{props.genres.map(genre => 
                    
                    <tr>{genre.value * 100}% {genre.name}</tr>
                )}</tr>

                <tr ><td>Your Artist:</td><td>{props.artist !== null ? props.artist.name : "none"}</td>
                </tr>
                <tr ><td>Length:</td><td>{props.amount} songs</td>
                </tr>
                <tr ><td>Explicit songs:</td><td>{props.explicit ? "true" : "false"}</td>
                </tr>
            </table>
            <button onClick={e => {
                props.generateFromRadio();
                props.generateFromArtist();
            }} className={props.generated ? "hidden" : "generateButton"} >
                Generate
            </button>
        </div>
    )
}
function SeePlaylist(props) {
    return (
        <div className="after">
            <button className="generateButton" onClick={e => window.location.hash = "#generatedPlaylist"}>See your playlist</button>
            {(props.amount === props.amountOfSongs) || <div className="shortList">The list will be shorter than expected because of limited number of non-explicit songs</div>}
        </div>
    )
}



export { PlaylistInfoView, SeePlaylist };