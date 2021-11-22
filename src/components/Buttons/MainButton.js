import PropTypes from 'prop-types'

function MainButton({ label }) {
    return <button className="button button--main">{label}</button>;
}

MainButton.propTypes = {
    label: PropTypes.string.isRequired
}

export default MainButton;