import React from 'react';
import '../../css/explore.css';

function ExploreGenresView(props) {
    return (
        <div className="explorePage">
            <button className="buttonBack" onClick={e => { window.location.hash = "#start" }}>←</button>

            <div className="title ">Pick a genre to explore!</div>
            {props.genres.map(genre =>
                <span className="exploreView" key={genre.id} onClick={e => {e.preventDefault(); props.genreChosen(genre); window.location.hash = "#exploreArtists" }}  >
                    <img alt={genre.name} src={genre.img} className="exploreImgGenre"></img>
                    <div>{genre.name}</div>
                </span>
            )}
        </div>
    );
}

export default ExploreGenresView;