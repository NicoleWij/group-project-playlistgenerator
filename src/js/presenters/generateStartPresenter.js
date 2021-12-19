import React from 'react';
import GenerateStartView from '../views/generateStartView';

function GenerateStartPresenter(props) {
    const [currentNum, setCurrentNum] = React.useState(props.pmodel.chosenNumberOfSongs);
    const [currentExplicit, setCurrentExplicit] = React.useState(props.pmodel.explicit);

    React.useEffect(() => {
        const obs = () => {
            setCurrentNum(props.pmodel.chosenNumberOfSongs)
            setCurrentExplicit(props.pmodel.explicit)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {console.log("hello")}
            {<GenerateStartView numberOfSongsChosen={(length) => props.pmodel.setNumberOfSongs(length)}
                explicitChosen={(choice) => props.pmodel.setExplicit(choice)}
                explicit={currentExplicit}
                currentNumberOfSongs={currentNum}/>}
        </div>
    );
}

export default GenerateStartPresenter;