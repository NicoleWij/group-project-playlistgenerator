import React from 'react';
import "../css/App.css"

function PromiseNoData(promise, data, error) {
    if (promise === null || promise === undefined) {
        return(<div></div>);
    } else if (data === null || data === undefined) {
        return ( <img alt="loading" class="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    } else if (error !== null) {
        return(<div></div>);
    } else if (data.error !== undefined){
        return(<div className="quotaLimit">quota limit, try again!</div>);
    }
    return false;
}

function PlaylistDone(promise, data, error){
    if (promise === null || promise === undefined) {
        return(<div></div>);
    } else if (data === null || data === undefined) {
        return ( <div></div>)
    } else if (error !== null) {
        return(<div></div>);
    } else if (data.error !== undefined){
        return(<div className="quotaLimitutton">quota limit, try again!</div>);
    }
    return false;
}

export {PromiseNoData, PlaylistDone};