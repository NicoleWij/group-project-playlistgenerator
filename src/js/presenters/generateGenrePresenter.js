import React from 'react';
import { GenerateGenreView } from '../views/generateGenreView';


function GenerateGenrePresenter(props) {
    const [total, setTotal] = React.useState(props.pmodel.total);
    const genres = props.model.genreList;

    React.useEffect(() => {
        const obs = () => {
            setTotal(props.pmodel.total)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, [props.pmodel]);

    return (
        <div>
            {<GenerateGenreView genres={genres}
                                setGenre={(genre, value, name) => props.pmodel.addGenre(genre, value, name)}
                                totalPercent={total}/>}
        </div>
    );
}

export default GenerateGenrePresenter;