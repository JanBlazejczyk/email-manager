import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import "./AddButton.scss";


function AddButton() {
    return (
        <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="lg" />
    );
}

export default AddButton;