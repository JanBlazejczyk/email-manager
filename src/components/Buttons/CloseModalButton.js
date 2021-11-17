import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";

function CloseModalButton({ closeDialog }) {
    return (
        <FontAwesomeIcon onClick={closeDialog} className="button button--close-modal" icon={faTimesCircle} size="lg" />
    );
}

export default CloseModalButton;