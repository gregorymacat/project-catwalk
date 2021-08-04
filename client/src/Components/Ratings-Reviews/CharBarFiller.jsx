import React from "react";

var CharBarFiller = (props) => {
  return (
    <div
      className="char-filler"
      style={{ width: `${props.percentage}%` }}
    ></div>
  );
};

export default CharBarFiller;
