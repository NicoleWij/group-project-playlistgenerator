import React from 'react';
import StartView from '../views/startView';


function StartPresenter(props) {
    const [loggedIn, setLoggedIn] = React.useState(null);

    React.useEffect(() => {
        const obs = () => {
            setLoggedIn(props.model.user)

        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            <StartView reset={() => props.pmodel.resetPlaylist()}
                user={loggedIn} />
        </div>
    );
}

export default StartPresenter;