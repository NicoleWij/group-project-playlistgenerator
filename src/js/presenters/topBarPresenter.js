import React from 'react';
import  TopbarView  from '../views/topbarView';


function TopBarPresenter(props) {

    return (
        <div>
            <TopbarView reset={() => props.pmodel.resetPlaylist()}/>
        </div>
    );
}

export default TopBarPresenter;