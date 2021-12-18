import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";
function CloseModalButton({ closeDialog }) {
    return (
        <FontAwesomeIcon onClick={closeDialog} className="button button--close-modal" icon={faTimes} size="lg" />
    );
}

CloseModalButton.propTypes = {
    closeDialog: PropTypes.func.isRequired
}

export default CloseModalButton;