import React from 'react';
import RatingsCharBreakdownBar from './RatingsCharBreakdownbar';

var RatingsChars = (props) => {
  return(
    <div className="ratings-breakdown-chars">
      {Object.keys(props.characteristics).map((char, index) => {
        return(
          <div key={index} className="ratings-breakdown-chars-item">
            {char}
            <RatingsCharBreakdownBar data={props.characteristics[char]} />
            {char === "Size" ?
              <div className="char-range">
                <div className="char-range-small">SMALL</div>
                <div>BIG</div>
              </div>
              : ""}
            {char === "Width" ?
              <div className="char-range">
                <div className="char-range-narrow">NARROW</div>
                <div>WIDE</div>
              </div>
              : ""}
            {char === "Comfort" ?
              <div className="char-range">
                <div className="char-range-soft">SOFT</div>
                <div>HARD</div>
              </div>
              : ""}
            {char === "Quality" ?
              <div className="char-range">
                <div className="char-range-poor">POOR</div>
                <div>GOOD</div>
              </div>
              : ""}
            {char === "Length" ?
              <div className="char-range">
                <div className="char-range-length">SHORT</div>
                <div>LENGTH</div>
              </div>
              : ""}
            {char === "Fit" ?
              <div className="char-range">
                <div className="char-range-fit">TIGHT</div>
                <div>LOOSE</div>
              </div>
              : ""}
          </div>
        )
      })}

    </div>
  );
};

export default RatingsChars;