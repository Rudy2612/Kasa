import PropTypes from 'prop-types';

export default function Banner({ img, text }) {
    return (
        <div className="banner">
            <img src={img} alt="banner"></img>
            <div className="banner__text">
                {text && <h1>{text}</h1>}
            </div>
        </div>
    )
}



Banner.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string,
}