import React from 'react';
import '../../css/explore.css';

function ExploreArtistsView(props) {
    return (
        <div className="explorePage" >
            <button className="buttonBack" onClick={e => {window.location.hash = "#exploreGenre"
            }}>←</button>
            <div className="title">Explore artists in the {props.genre.name} genre!</div>
            {props.artist.map(artist =>
                <span className="exploreView" key={artist.id} onClick={e => {
                    props.func(artist.id)
                }} >
                    <img alt={artist.name} src={artist.picture_xl} className="exploreImgArtist"></img>
                    <div>{artist.name}</div>
                </span>
            )}
        </div>
    );
}


export default ExploreArtistsView;
