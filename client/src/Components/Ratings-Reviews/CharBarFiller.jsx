import React from "react";

var CharBarFiller = (props) => {
  return (
    <div
      className="char-filler"
      style={{ width: `${props.percentage}%` }}
    >
      <div className="char-symbol">
        ▼
      </div>
    </div>
  );
};

export default CharBarFiller;
