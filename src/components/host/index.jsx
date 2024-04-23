import PropTypes from 'prop-types';

export default function Host({ host }) {

    let { name, picture } = host;

    return (
        <div className="host">
            <p className="host__name">{name}</p>
            <img className="host__picture" src={picture}></img>
        </div>
    )
}

Host.propTypes = {
    host: PropTypes.array.isRequired,
}