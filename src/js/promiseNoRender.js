import React from "react";
import "../css/App.css"

function promiseNoRender(promise, data, error) {
    if (promise === null || promise === undefined) {
        return(<div></div>);
    } else if (data === null || data === undefined) {
        return ( <div></div>)
    } else if (error !== null) {
        return(<div></div>);
    } else if (data.error !== undefined){
        return(<div className="quotaLimit">quota limit, try again!</div>);
    }
    return false;
}

export default promiseNoRender;