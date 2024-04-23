import { useState } from "react"
import PropTypes from 'prop-types';

export default function Dropdown({ title, content }) {


    let [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="dropdown">


            <div className="dropdown__topbar">
                <span className="dropdown__title">{title}</span>

                <svg onClick={handleOpen} className={`dropdown__chevron ${isOpen ? "open" : "close"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
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
    content: PropTypes.string.isRequired,
}