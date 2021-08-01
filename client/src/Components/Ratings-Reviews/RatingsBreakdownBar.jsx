import React from 'react';
import Filler from './RatingBarFiller'

var RatingsBreakdownBar = (props) => {

  return(
    <div className="progress-bar">
      <Filler value={props.value} percentage={props.percentage}/>
    </div>

  );

};



export default RatingsBreakdownBar;