import PropTypes from 'prop-types';
import classNames from 'classnames';

function MainButton({ label, handleClick, notActive }) {

    const classes = classNames({
        "button button--main": true,
        "button button--main-not-active": notActive
    });


    return <button onClick={handleClick} className={classes}>{label}</button>;
}

MainButton.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}

export default MainButton;