import React from "react";

function promiseNoArtists(promise,data,error) {
    if (promise === null || promise === undefined) {
        return (<span>no data</span>)
    } else if (data === undefined || data === null) {
        return ( <img alt="loading" className="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    }else if(data.error !== undefined){
        return (noData());
    } else if (error != null /* && error !== undefined */) {
        return (<span>{error}</span>)
    }
    return false;
}

function noData() {
    return (
        <div className="noData">
            Sorry, quota limit!
            <div className="noDataItem">
                <div className="retryButton" onClick={e => window.location.hash = "#exploreGenre"}>Retry</div>
            </div>
        </div >
    )
}

export default promiseNoArtists;