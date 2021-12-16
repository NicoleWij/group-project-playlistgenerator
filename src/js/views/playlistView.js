import React from 'react';
import '../../css/playlistView.css';

function PlaylistView(props) {
    return (
        <div className="playlistMenu">
            <div className="leftbox"></div>

            <div className="middlebox">
                <div className="topr">
                    <div className="titletext">&#128393; Playlist 1</div>
                    <div className="spacing"></div>
                    <div className="savecontainer"><button className="save">Save</button></div>
                </div>

                <table className="playlisttable">
                    <tbody>
                        <tr>
                            <td>Song</td>
                            <td>Artist</td>
                            <td>Album</td>
                            <td>Length</td>
                        </tr>
                        
                        <tr>
                            <td className="song"><button className="playButton">&#9658;</button>Song1</td>
                            <td>Artist1</td>
                            <td>Album1</td>
                            <td>3:00</td>
                        </tr>
                        
                        <tr>
                            <td><button className="playButton">&#9658;</button>Song2</td>
                            <td>Artist2</td>
                            <td>Album2</td>
                            <td>2:45</td>
                        </tr>

                    </tbody>
			    </table>

            </div>

            <div className="rightbox">  </div>

        </div>
    )
}


export default PlaylistView;