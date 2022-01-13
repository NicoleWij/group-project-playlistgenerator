import React from 'react';
import ExploreGenresView from '../views/exploreGenresView';


function ExploreGenrePresenter(props) {

    return (
        <div>
            {<ExploreGenresView genres={props.model.genreList}
                genreChosen={(genre) => props.model.getArtists(genre)} />}
        </div>
    );
}

export default ExploreGenrePresenter;