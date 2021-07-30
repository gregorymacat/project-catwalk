import React from 'react';

var StarsDisplay = (props) => {
  var starsWholeNum = Math.floor(props.starsData);
  var starsDecimal = props.starsData - starsWholeNum;
  var stars;
  if (starsDecimal >= 0 && starsDecimal <= .125) {
    stars = starsWholeNum;
  } else if (starsDecimal >= .125 && starsDecimal <= .375) {
    stars = 2.25;
  } else if (starsDecimal >= .375 && starsDecimal <= .625) {
    stars = 2.5;
  } else if (starsDecimal >= .625 && starsDecimal <= .875) {
    stars = 2.5;
  } else {
    stars = starsWholeNum + 1;
  }
  return (
    <div className="stars-display">
      <div className="Stars" style={{"--rating": (stars).toString()}} aria-label="Rating of this product is 2.3 out of 5."></div>
    </div>
  );
};

export default StarsDisplay;