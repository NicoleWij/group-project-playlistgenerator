import React from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" >
            <button className="buttonBack" onClick={e => {
                if (props.audio !== null) props.audio.pause();
                window.location.hash = "#exploreGenre"
            }}>←</button>
            <div className="title">Explore artists in the  genre!</div>
            {props.artist.map(artist =>
                <span className="exploreView" key={artist.id} onClick={e => {
                    if (props.audio !== null) props.audio.pause();
                    props.func(artist.id)
                }} >
                    <img alt={artist.name} src={artist.picture_xl} className="exploreImgArtist"></img>
                    <div>{artist.name}</div>
                </span>
            )}
        </div>
    );
}

function StopMusic(props) {
    return (
        <div className="stopMusic">
            {props.audio !== null && (
                <div className="musicBar" >
                    <div className="stopButton" onClick={e => {
                        console.log("stop music");
                        props.audio.pause();
                        props.musicStopped()
                    }}><p className="stop">STOP</p>
                    </div>
                    <div>{props.song.title}</div>
                    <div>{props.song.artist.name}</div>
                    <div className="nextButton" onClick={e => {
                        props.audio.pause();
                        props.nextSong();
                    }}><p className="next">NEXT</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export { ExploreArtistsView, StopMusic };
