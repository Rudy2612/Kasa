import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Rating({ rating = 0 }) {

    return (
        <div className='rating'>
            {[...Array(5)].map((e, i) => {
                return <Star color={rating <= i ? "#E3E3E3" : "#FF6060"} key={i} />
            })}
        </div>
    )
}

function Star({ color }) {
    return (
        <FontAwesomeIcon className='rating__star' icon={faStar} color={color} />
    )
}

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
}


Star.propTypes = {
    color: PropTypes.string.isRequired,
}