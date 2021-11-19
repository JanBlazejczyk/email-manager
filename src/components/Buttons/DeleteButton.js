import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";

function DeleteButton() {
    return (
        <FontAwesomeIcon className="button button--delete" icon={faTrashAlt} size="lg" />
    );
}

export default DeleteButton;