import React from "react";
import "../css/App.css"

function promiseNoRender(promise, data, error) {
    console.log(error)
    if (promise === null || promise === undefined) {
        console.log("promise")
        return(<div></div>);
    } else if (data === null || data === undefined) {
        console.log("data")
        return ( <div></div>)
    } else if (error !== null) {
        console.log("error")
        return(<div></div>);
    } else if (data.error !== undefined){
        console.log("quota limit")
        return(<div className="quotaLimit">quota limit, try again!</div>);
    }
    console.log("data exists")
    return false;
}

export default promiseNoRender;