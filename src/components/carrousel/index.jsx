import { useState } from "react"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>}

            {pictures.length >= 2 && <div className="carrousel__arrow-right" onClick={() => handleChange(-1)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>}

        </div>
    )
}



Carroussel.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string,
}