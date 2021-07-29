import React from 'react';

var StarsDisplay = (props) => {
  return (
    <div className="star-display">
      <div class="Stars" style={{"--rating": (props.starsData).toString()}} aria-label="Rating of this product is 2.3 out of 5."></div>
    </div>
  );
};

export default StarsDisplay;