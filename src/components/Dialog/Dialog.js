import { CloseModalButton } from "../Buttons";

import "./Dialog.scss";

function Dialog({ children, active, closeDialog }) {

  <CloseModalButton closeDialog={closeDialog} />

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

export default Dialog;