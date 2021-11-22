import "./Snackbar.scss";
import { useEffect } from "react";

function Snackbar({
  text,
  active,
  handleClose,
  position = "bottom-left",
  type = "information",
  time = 5000
}) {
  useEffect(() => {
    handleClose(time);
  });

  const applyPosition = () => {
    const positionObject = {
      "bottom-left": { bottom: "40px", left: "40px" },
      "bottom-right": { bottom: "40px", right: "40px" },
      "bottom-center": { bottom: "40px", right: "50vh" },
      "top-left": { top: "40px", left: "40px" },
      "top-right": { top: "40px", right: "40px" },
      "top-center": { top: "40px", right: "50vh" }
    };
    return positionObject[position];
  };

  const applyColors = () => {
    const colorsObject = {
      error: { backgroundColor: "red", color: "white" },
      warning: { backgroundColor: "orange", color: "white" },
      information: { backgroundColor: "blue", color: "white" },
      success: { backgroundColor: "green", color: "white" }
    };
    return colorsObject[type];
  };

  const positionStyle = applyPosition();
  const colorStyle = applyColors();

  if (active) {
    return (
      <div
        className="snackbar__container"
        style={{ ...positionStyle, ...colorStyle }}
      >
        <p className="snackbar__text">{text}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Snackbar;
