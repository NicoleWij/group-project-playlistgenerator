import React from 'react';
import  StartView  from '../views/startView';


function StartPresenter(props) {

    return (
        <div>
            <StartView pmodel={props.pmodel}/>
        </div>
    );
}

export default StartPresenter;