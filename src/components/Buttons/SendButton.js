import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import "./Buttons.scss";


function SendButton() {
    return (
        <FontAwesomeIcon className="button button--send" icon={faPaperPlane} size="lg" />
    );
}

export default SendButton;