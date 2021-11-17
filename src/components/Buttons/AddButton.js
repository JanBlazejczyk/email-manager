import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";


function AddButton({ openDialog }) {
    return (
        <FontAwesomeIcon onClick={openDialog} className="button button--add" icon={faPlusCircle} size="lg" />
    );
}

export default AddButton;