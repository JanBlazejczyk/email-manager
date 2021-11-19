import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";

function EditButton() {
    return (
        <FontAwesomeIcon className="button button--edit" icon={faPenSquare} size="lg" />
    );
}

export default EditButton;