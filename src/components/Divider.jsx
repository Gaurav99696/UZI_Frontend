import React from "react";

const Divider = ({ center, width }) => {
  return (
    <div
      className="dividerContanior"
      style={{ justifyContent: center ? "center" : "left" }}
    >
      <div
        className="divider"
        style={{ width: width ? width + "px" : "91px" }}
      ></div>
    </div>
  );
};

export default Divider;
