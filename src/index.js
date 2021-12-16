import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App.js";
import Model from "./js/model";
import LoginModel from "./js/loginModel";
import PlaylistModel from "./js/playlistModel";

const model = new Model();
const loginModel = new LoginModel();
const pmodel = new PlaylistModel();
ReactDOM.render(
    <React.StrictMode>
        <App model={model} pmodel={pmodel} loginModel={loginModel} />
    </React.StrictMode>,
    document.getElementById("root")
);
