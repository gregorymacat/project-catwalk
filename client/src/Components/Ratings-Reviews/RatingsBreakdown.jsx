import React from 'react';
import StarsDisplay from '../Shared/StarsDisplay';
import RatingsBreakdownBar from './RatingsBreakdownBar';
import RatingsChars from './RatingsChars';

var RatingsBreakdown = (props) => {
  //Star Displau and breakdown progress bars
    var numberOfReviews = 0;
    var totalStars = 0;
    for (var key in props.metaData.ratings) {
      totalStars += parseFloat(props.metaData.ratings[key]) * key;
      numberOfReviews += parseFloat(props.metaData.ratings[key]);
    }
    var rating = (totalStars / numberOfReviews).toFixed(1);

    return(
      <div className="grid-item rating-breakdown">
        <div className="rating-breakdown-header">
          <div className="rating-breakdown-number">
            <h1>{rating}</h1>
          </div>
          <div className="rating-breakdown-star-display">
            <StarsDisplay starsData={rating}/>
          </div>
        </div>
        <div className="rating-breakdown-body">
          <div className="progress-bar-contents">
            5 Stars: <RatingsBreakdownBar percentage={(parseFloat(props.metaData.ratings["5"]).toFixed(2)/numberOfReviews) * 100}/> ({props.metaData.ratings["5"]})
          </div>
          <div className="progress-bar-contents">
            4 Stars: <RatingsBreakdownBar percentage={(parseFloat(props.metaData.ratings["4"]).toFixed(2)/numberOfReviews) * 100}/> ({props.metaData.ratings["4"]})
          </div>
          <div className="progress-bar-contents">
            3 Stars: <RatingsBreakdownBar percentage={(parseFloat(props.metaData.ratings["3"]).toFixed(2)/numberOfReviews) * 100}/> ({props.metaData.ratings["3"]})
          </div>
          <div className="progress-bar-contents">
            2 Stars: <RatingsBreakdownBar percentage={(parseFloat(props.metaData.ratings["2"]).toFixed(2)/numberOfReviews) * 100}/> ({props.metaData.ratings["2"]})
          </div>
          <div className="progress-bar-contents">
            1 Stars: <RatingsBreakdownBar percentage={(parseFloat(props.metaData.ratings["1"]).toFixed(2)/numberOfReviews) * 100}/> ({props.metaData.ratings["1"]})
          </div>
        </div>
        <div className="rating-breakdown-footer">
        <RatingsChars characteristics={props.metaData.characteristics} />
        </div>
      </div>
    )
}

export default RatingsBreakdown;