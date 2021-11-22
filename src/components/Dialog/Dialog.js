import PropTypes from 'prop-types';

import { CloseModalButton } from "../Buttons";

import "./Dialog.scss";

function Dialog({ children, active, closeDialog }) {
  if (active) {
    return (
      <div className="dialog">
        <div className="dialog__header">
          <CloseModalButton closeDialog={closeDialog} />
        </div>
        <div className="dialog__body">
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

Dialog.propTypes = {
  active: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Dialog;