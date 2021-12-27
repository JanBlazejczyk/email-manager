import PropTypes from 'prop-types'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";


function AddButton({ openDialog }) {
    return (
        // <FontAwesomeIcon onClick={openDialog} className="button button--add" icon={faPlusCircle} size="lg" />
        <button className="button button--add" onClick={openDialog}>+</button>
    );
}

AddButton.propTypes = {
    openDialog: PropTypes.func.isRequired
}

export default AddButton;