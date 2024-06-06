import { useState } from "react"
import PropTypes from 'prop-types';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dropdown({ title, content }) {


    let [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="dropdown">


            <div className="dropdown__topbar">
                <span className="dropdown__title">{title}</span>

                <FontAwesomeIcon onClick={handleOpen} className={`dropdown__chevron ${isOpen ? "open" : "close"}`} icon={faChevronUp} />
            </div>


            {isOpen === true &&
                <div className="dropdown__text-container">
                    {Array.isArray(content) ?
                        <ul className="dropdown__content">
                            {content.map((e, i) => { return (<li key={i}>{e}</li>) })}
                        </ul>
                        :
                        <p className="dropdown__content">{content}</p>
                    }
                </div>
            }

        </div>
    )
}


Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}