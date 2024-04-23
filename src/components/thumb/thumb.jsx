import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Thumb({ id, title, cover }) {
    return (
        <Link to={`logement/${id}`} className="thumb">
            <div className="thumb__bg"></div>
            <h3 className="thumb__title">{title}</h3>
            <img className="thumb__cover" src={cover}></img>
        </Link>
    )
}

Thumb.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}