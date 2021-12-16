import React from 'react';
import '../../css/explore.css';

function ExploreGenresView(props) {
    return (
        console.log(props.genres),
        <div className="explorePage">
            <button className="buttonBack" onClick={e => { window.location.hash = "#start" }}>←</button>

            <div className="title ">Pick a genre to explore!</div>
            {props.genres.map(genre =>
                <span className="exploreView" key={genre.id} onClick={e => { props.genreChosen(genre); window.location.hash = "#exploreArtists" }}  >
                    <img alt={genre.name} src={genre.img} className="exploreImgGenre"></img>
                    <div>{genre.name}</div>
                </span>
            )}
        </div>
    );
}

export default ExploreGenresView;