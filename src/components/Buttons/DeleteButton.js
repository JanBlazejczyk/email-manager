import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";

function DeleteButton() {
    return (
        <div className="button__wrapper">
            <FontAwesomeIcon className="button button--delete" icon={faTrashAlt} size="lg" />
        </div>
    );
}

export default DeleteButton;