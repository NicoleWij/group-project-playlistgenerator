import React, { Component } from 'react';
import { } from './js/firebasecd';
// import './css/App.css';
import ExploreArtistsPresenter from './js/presenters/exploreArtistsPresenter';
import ExploreGenrePresenter from './js/presenters/exploreGenrePresenter';
import GenerateStartPresenter from './js/presenters/generateStartPresenter';
import GenerateGenrePresenter from './js/presenters/generateGenrePresenter';
import GenerateArtistsPresenter from './js/presenters/generateArtistsPresenter';
import LoginPresenter from './js/presenters/loginPresenter';
import RegisterPresenter from './js/presenters/registerPresenter';
import MyPlaylistsPresenter from './js/presenters/myPlaylistsPresenter';
import TopBarPresenter from './js/presenters/topBarPresenter';
import PlaylistPresenter from './js/presenters/playlistPresenter';
import Show from './js/presenters/showPresenter';
import StartPresenter from './js/presenters/startViewPresenter';
import GeneratedPlaylistPresenter from './js/presenters/generatedPlaylistPresenter';
import PlaylistInfoPresenter from './js/presenters/playlistInfoPresenter';

function defaultRoute() {
  if (["#start", "#exploreGenre", "#exploreArtists", "#login", "#register", "#generateStart", "#generateArtists"
    , "#myPlaylists", "#generatedPlaylist", "#playlist"]
    .find((knownRoute) => knownRoute !== window.location.hash)) {
    window.location.hash = "#start";
  }
}

function App(props) {

  defaultRoute();
  return (
    <div>
      <TopBarPresenter model={props.model}
      pmodel={props.pmodel}/>
      <Show hash="#start" class="mainContent debug"><StartPresenter pmodel={props.pmodel} 
      model={props.model} /></Show>
      <Show hash="#exploreGenre" class="mainContent debug"><ExploreGenrePresenter model={props.model} /></Show>
      <Show hash="#exploreArtists" class="mainContent debug"><ExploreArtistsPresenter model={props.model} /></Show>
      <Show hash="#generateStart" class="mainContent debug"><GenerateStartPresenter pmodel={props.pmodel} /></Show>
      <Show hash="#generateGenre" class="mainContent debug"><GenerateGenrePresenter model={props.model}
        pmodel={props.pmodel} /></Show>

      <Show hash="#generateArtists" class="mainContent debug"><GenerateArtistsPresenter model={props.model}
        pmodel={props.pmodel} /></Show>

      <Show hash="#login" class="mainContent debug"><LoginPresenter model={props.model} /></Show>
      <Show hash="#register" class="mainContent debug"><RegisterPresenter model={props.model} /></Show>
      <Show hash="#generatedPlaylist" class="mainContent debug"><GeneratedPlaylistPresenter pmodel={props.pmodel}
        model={props.model} /></Show>

      <Show hash="#playlistInfo" class="mainContent debug"><PlaylistInfoPresenter pmodel={props.pmodel} /></Show>
      <Show hash="#myPlaylists" class="mainContent debug"><MyPlaylistsPresenter model={props.model} /></Show>
      <Show hash="#playlist" class="mainContent debug"><PlaylistPresenter model={props.model}
        pmodel={props.pmodel} /></Show>
    </div>
  );
}

export default App;
