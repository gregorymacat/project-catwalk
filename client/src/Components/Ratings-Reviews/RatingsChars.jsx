import React from 'react';
import RatingsCharBreakdownBar from './RatingsCharBreakdownBar';

var RatingsChars = (props) => {
  return(
    <div className="ratings-breakdown-chars">
      {Object.keys(props.characteristics).map(key => {
        return(
          <div className="ratings-breakdown-chars-item">
            {key}
            <RatingsCharBreakdownBar data={props.characteristics[key]} />
            {key === "Size" ? <div className="char-range"><div className="char-range-small">SMALL</div><div>BIG</div></div> : ""}
            {key === "Width" ? <div className="char-range"><div className="char-range-narrow">NARROW</div><div>WIDE</div></div> : ""}
            {key === "Comfort" ? <div className="char-range"><div className="char-range-soft">SOFT</div><div>HARD</div></div> : ""}
            {key === "Quality" ? <div className="char-range"><div className="char-range-poor">POOR</div><div>GOOD</div></div> : ""}
          </div>
        )
      })}

    </div>
  );
};

export default RatingsChars;