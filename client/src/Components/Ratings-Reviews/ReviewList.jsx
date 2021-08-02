import React from 'react';
import moment from 'moment';

import StarsDisplay from '../Shared/StarsDisplay';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownReviews: []
    }

  }


  render() {
    return (
      <div className="grid-item reviews">
        {this.props.data.map((tile, index) => {
          //handling summary length
          var reviewSummaryCut = tile.summary;
          if (tile.summary > 60) {
            reviewSummaryCut = tile.reviewSummary.substr(0, 60) + '...';
          }
          //handling reccomended
          var recommendedDisplay;
          if (tile.recommended) {
            recommendedDisplay = '✓ I recommend this product';
          }
          //handling review body
          var reviewText;
          if (tile.body.length > 250) {
            reviewText = tile.body.substr(0, 250) + '... ';
          } else {
            reviewText = tile.body;
          }

          return (
            <div key={index} className="review-tile">
              <div className="review-tile-header">
                <StarsDisplay starsData={tile.rating} />
                <div className="review-tile-verified"> {tile.reviewer_name}, {moment(tile.date).format('LL')}</div>
              </div>
              <div className="review-tile-reviewSummary">{reviewSummaryCut}</div>
              <div className="review-tile-reviewBody">
                <div className="review-tile-reviewBodyText">
                  {reviewText}
                  {tile.body.length > 250 &&
                    <span className="review-tile-reviewBodyButton" onClick={(reviewText) => this.handleShowMoreClick(reviewText)}>Show more</span>
                  }
                </div>
                <div className="review-tile-reviewBodyImg">
                  {tile.photos.map((image, key) => {
                    return <img className="review-tile-Img" src={image.url}></img>;
                  })}
                </div>
              </div>
              <div className="review-tile-recommended">{recommendedDisplay}</div>
              <div className="review-tile-footer">
                <div className="review-tile-helpfulness">Helpful? Yes({tile.helpfulness}) | Report</div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
};

export default Review;