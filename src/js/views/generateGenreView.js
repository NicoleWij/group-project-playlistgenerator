import React from 'react';
import '../../css/generateGenre.css';
import '../../css/button.css';

function GenerateGenreView(props) {
    return (
        <div className="main">
            <div className="content">
                <button className="buttonNext" disabled={!(props.totalPercent === 1)} onClick={e => { window.location.hash = "#generateArtists" }}>→</button>
                <button className="buttonBack" onClick={e => { window.location.hash = "#generateStart" }}>←</button>
                <div className="genreTitle">
                    What genres are you interested in? <br></br>
                    {(props.totalPercent * 100).toFixed(0) + "%/100%"} <br></br>
                    <button onClick={e => { props.genres.map(genre => { return (props.setGenre(genre.radio, 0, genre.name), buttonPressed(genre.id, genre.name))})}}
                        className={"generateAButton"}
                        disabled={props.totalPercent === 0}>
                        Changed your mind? <br></br> Clear your choices here
                    </button>
                </div>
            </div>

            {props.genres.map(genre =>
                <span className="generateView" key={genre.id}  >
                    <img alt={genre.name}src={genre.img} className="generateImgGenre"></img>
                    <div>{genre.name}</div>
                    <div className="slide">
                        <input onChange={e => { e = value(genre.id, genre.name); props.setGenre(genre.radio, e, genre.name) }}
                            type="range"
                            id={genre.id}
                            min="0" max="100"
                            step="20"
                            defaultValue="0"
                            disabled={((props.totalPercent * 100) === 100)}></input>
                        <div id={genre.name}>0</div><div className="percent">%</div>
                    </div>
                </span>
            )}
        </div>
    );
}

function buttonPressed(range, genre) {
    document.getElementById(range).value = 0;
    document.getElementById(genre).innerHTML = 0;
}

function value(range, genre) {
    var x = document.getElementById(range).value;
    document.getElementById(genre).innerHTML = x;
    return x;
}

export { GenerateGenreView };