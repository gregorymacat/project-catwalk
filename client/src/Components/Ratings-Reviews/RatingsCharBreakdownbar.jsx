import React from 'react';
import CharBarFiller from './CharBarFiller'

var RatingsCharBreakdownBar = (props) => {

  return(
    <div className="char-progress-bar">
      <CharBarFiller percentage={(props.data.value/5).toFixed(2) * 100} />
    </div>

  );

};



export default RatingsCharBreakdownBar;