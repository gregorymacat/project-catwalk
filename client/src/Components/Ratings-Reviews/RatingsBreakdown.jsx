import React from 'react';
import StarsDisplay from '../Shared/StarsDisplay';
import RatingsBreakdownBar from './RatingsBreakdownBar';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var numberOfReviews = 0;
    var totalStars = 0;
    var largestReview = 0;
    for (var key in this.props.metaData.ratings) {
      if(parseInt(this.props.metaData.ratings[key]) > largestReview) {
        largestReview = parseInt(this.props.metaData.ratings[key]);
      }
      totalStars += parseInt(this.props.metaData.ratings[key]) * key;
      numberOfReviews += parseInt(this.props.metaData.ratings[key]);
    }
    var rating = (totalStars / numberOfReviews).toFixed(1);
    return(
      <div className="rating-breakdown">
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
            5 Stars: <RatingsBreakdownBar percentage={(parseInt(this.props.metaData.ratings["5"]).toFixed(2)/largestReview) * 100}/>
          </div>
          <div className="progress-bar-contents">
            4 Stars: <RatingsBreakdownBar percentage={(parseInt(this.props.metaData.ratings["4"]).toFixed(2)/largestReview) * 100}/>
          </div>
          <div className="progress-bar-contents">
            3 Stars: <RatingsBreakdownBar percentage={(parseInt(this.props.metaData.ratings["3"]).toFixed(2)/largestReview) * 100}/>
          </div>
          <div className="progress-bar-contents">
            2 Stars: <RatingsBreakdownBar percentage={(parseInt(this.props.metaData.ratings["2"]).toFixed(2)/largestReview) * 100}/>
          </div>
          <div className="progress-bar-contents">
            1 Stars: <RatingsBreakdownBar percentage={(parseInt(this.props.metaData.ratings["1"]).toFixed(2)/largestReview) * 100}/>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingsBreakdown;