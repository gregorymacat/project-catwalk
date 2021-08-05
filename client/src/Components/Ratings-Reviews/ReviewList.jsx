import React from "react";
import moment from "moment";

import StarsDisplay from "../Shared/StarsDisplay";
import RatingsSort from "./RatingsSort";
import { getAllReviews } from "../../../Controllers/ratings-reviews";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulnessButton: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleHelpfulness = this.handleHelpfulness.bind(this);
  }


  handleChange(rating) {
    this.props.getReviewsCallback(rating);
  }

  handleHelpfulness(e) {
    this.setState({
      helpfulnessButton: false
    });
  }

  render() {
    return (
      <div className="grid-item reviews">
        <RatingsSort
          reviewListCallback={this.handleChange}
          prodRatings={this.props.metaData}
        />
        {this.props.data.map((tile, index) => {
          //handling summary length
          var reviewSummaryCut = tile.summary;
          if (tile.summary > 60) {
            reviewSummaryCut = tile.reviewSummary.substr(0, 60) + "...";
          }
          //handling reccomended
          var recommendedDisplay;
          if (tile.recommended) {
            recommendedDisplay = "✓ I recommend this product";
          }
          //handling review body
          var reviewText;
          if (tile.body.length > 250) {
            reviewText = tile.body.substr(0, 250) + "... ";
          } else {
            reviewText = tile.body;
          }
          return (
            <div key={index} className="review-tile">
              <div className="review-tile-item review-tile-header">
                <StarsDisplay starsData={tile.rating} />
                <div className="review-tile-verified">
                  {tile.reviewer_name}, {moment(tile.date).format("LL")}
                </div>
              </div>
              <div className="review-tile-item review-tile-reviewSummary">
                {reviewSummaryCut}
              </div>
              <div className="review-tile-item review-tile-reviewBody">
                <div className="review-tile-item review-tile-reviewBodyText">
                  {reviewText}
                  {tile.body.length > 250 && (
                    <span
                      className="review-tile-item review-tile-reviewBodyButton"
                      onClick={(reviewText) =>
                        this.handleShowMoreClick(reviewText)
                      }
                    >
                      Show more
                    </span>
                  )}
                </div>
                <div className="review-tile-item review-tile-reviewBodyImg">
                  {tile.photos.map((image, key) => {
                    return (
                      <img
                        key={key}
                        className="review-tile-Img"
                        src={image.url}
                      ></img>
                    );
                  })}
                </div>
              </div>
              <div className="review-tile-item review-tile-recommended">
                {tile.recommend && <div>✓ I recommend this product</div>}
              </div>
              <div className="review-tile-item review-tile-response">
                {tile.response && (
                  <div>Response from seller: {tile.response}</div>
                )}
              </div>
              <div className="review-tile-item review-tile-footer">
                <div className="review-tile-helpfulness-item">
                  Helpful?
                  <div
                    onClick={() => this.handleHelpfulness(tile)}
                    className={this.state.helpfulnessButton ? "review-tile-helpfulness-item-true" : "review-tile-helpfulness-item-false"}
                  >
                    Yes ({tile.helpfulness})
                  </div>
                  <div
                    onClick={this.handleHelpfulness}
                    value="No"
                    className={this.state.helpfulnessButton ? "review-tile-helpfulness-item-true" : "review-tile-helpfulness-item-false"}
                  >
                    No
                  </div>
                </div>
                <hr className="ratings-hr"></hr>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Review;
