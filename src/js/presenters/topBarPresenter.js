import React from 'react';
import  TopbarView  from '../views/topbarView';


function TopBarPresenter(props) {
    const [loggedIn, setloggedIn] = React.useState(props.model.user);

    React.useEffect(() => {
        const obs = () => {
            setloggedIn(props.model.user);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            <TopbarView reset={() => props.pmodel.resetPlaylist()} 
            logoutUser={() => props.model.logoutUser()}
            user = {loggedIn}/>
        </div>
    );
}

export default TopBarPresenter;