import React from 'react';
import Filler from './RatingbarFiller'

var RatingsBreakdownBar = (props) => {

  return(
    <div className="progress-bar">
      <Filler value={props.value} percentage={props.percentage}/>
    </div>

  );

};



export default RatingsBreakdownBar;