import { useState } from "react"
import PropTypes from 'prop-types';

export default function Carroussel({ pictures = [], title }) {
    let [index, setIndex] = useState(0);

    const handleChange = (change) => {
        let new_index = index - change;
        if (new_index > pictures.length - 1)
            new_index = 0;
        else if (new_index < 0)
            new_index = pictures.length - 1;

        setIndex(new_index)
    }

    if (pictures.length === 0)
        return null;

    return (
        <div className="carrousel">

            <img src={pictures[index]} alt={title}></img>

            {pictures.length >= 2 && <div className="carrousel__arrow-left" onClick={() => handleChange(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white" />
                </svg>
            </div>}

            {pictures.length >= 2 && <div className="carrousel__arrow-right" onClick={() => handleChange(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white" />
                </svg>
            </div>}

        </div>
    )
}



Carroussel.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string,
}