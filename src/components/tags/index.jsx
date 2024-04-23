import PropTypes from 'prop-types';

export default function Tags({ tags = [] }) {

    if (tags.length === 0)
        return null;

    return (
        <div className="tags">
            {tags.map((e, i) => {
                return (
                    <div className="tags__item" key={i}>
                        <span>{e}</span>
                    </div>
                )
            })}
        </div >
    )
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
}