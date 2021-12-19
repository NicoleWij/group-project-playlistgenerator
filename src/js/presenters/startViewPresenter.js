import React from 'react';
import  StartView  from '../views/startView';


function StartPresenter(props) {

    return (
        <div>
            <StartView reset={() => props.pmodel.resetPlaylist()}/>
        </div>
    );
}

export default StartPresenter;