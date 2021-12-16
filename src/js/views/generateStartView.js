import React from 'react';
import '../../css/generateStartView.css';
import '../../css/button.css';

export function GenerateStartView(props) {
    return (
        <div>
            <div className="random">
                <button className="buttonNext" disabled={ props.currentNumberOfSongs === 0} onClick={e => { window.location.hash = "#generateGenre" }}>→</button>
                <button className="buttonBack" onClick={e => { window.location.hash = "#start" }}>←</button>
                <div className="titleTextG">
                    How many songs would you like in your playlist?
                </div>
            </div>

            <div>
                <div className="explicitTextG">
                    Allow explicit songs {' '}
                    <label className="switch">
                        <input type="checkbox"
                            onChange={e=>{props.explicitChosen(!(props.explicit))}}></input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="menuG">
                <div className="menuItemG">
                    <button className={props.currentNumberOfSongs === 10 ? "pressedButton10" : "button10"} onClick={e => props.numberOfSongsChosen(10)}>
                        <p>Short<br></br>10 songs</p>
                    </button>
                </div>
                <div className="menuItemG">
                    <button className={props.currentNumberOfSongs === 20 ? "pressedButton20" : "button20"} onClick={e => props.numberOfSongsChosen(20)}>
                        <p>Medium<br></br>20 songs</p>
                    </button>
                </div>
                <div className="menuItemG">
                    <button className={props.currentNumberOfSongs === 30 ? "pressedButton30" : "button30"} onClick={e => props.numberOfSongsChosen(30)}>
                        <p>Long<br></br>30 songs</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenerateStartView;