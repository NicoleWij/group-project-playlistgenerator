import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App.js";
import Model from "./js/model";
import PlaylistModel from "./js/playlistModel";

const model = new Model();
const pmodel = new PlaylistModel();
ReactDOM.render(
    <React.StrictMode>
        <App model={model} pmodel={pmodel}/>
    </React.StrictMode>,
    document.getElementById("root")
);
