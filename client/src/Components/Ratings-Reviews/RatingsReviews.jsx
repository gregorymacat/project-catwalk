import React from "react";
import moment from "moment";
import axios from "axios";

import { reviewExampleData, reviewMetaExampleData } from "./example.data";
import ReviewList from "./ReviewList";
//import RatingsSort from './RatingsSort';
import RatingsBreakdown from "./RatingsBreakdown";
import { getAllReviews, getAllMetaReviews } from "../../../Controllers/ratings-reviews";
import ModalViewer from "./Modal/ModalViewer";

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      reviewListData: reviewExampleData,
      reviewMetaData: reviewMetaExampleData,
      writeReview: false,
      shownReviews: [],
      numberOfShownReviews: 2,
    };
    this.getReviews = this.getReviews.bind(this);
    this.getMetaReviews = this.getMetaReviews.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMoreReviews = this.handleMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaReviews();
  }

  getMetaReviews() {
    getAllMetaReviews(this.state.product, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          reviewMetaData: res.data,
        });
      }
    });
  }

  getReviews(sortBy) {
    var sortBy = sortBy || "relevant";
    var productParams = {
      productID: this.state.product,
      sort: sortBy,
    };
    getAllReviews(productParams, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          reviewListData: res.data,
          shownReviews: res.data.results.slice(
            0,
            this.state.numberOfShownReviews
          ),
        });
      }
    });
  }

  handleClick() {
    this.setState({
      writeReview: true,
    });
  }

  handleMoreReviews(e) {
    this.setState({
      numberOfShownReviews: this.state.numberOfShownReviews + 2,
      shownReviews: this.state.reviewListData.results.slice(
        0,
        this.state.numberOfShownReviews + 2
      ),
    });
  }

  render() {
    return (
      <div id="RatingsReviews" className="ratings-reviews" onClick={(e) => {this.props.handleInteraction(e, 'rr')}}>
        <div className="grid-container ratings-reviews-dispay">
          <RatingsBreakdown metaData={this.state.reviewMetaData} />
          <ReviewList
            getReviewsCallback={this.getReviews}
            metaData={this.state.reviewMetaData}
            moreReviews={() => this.handleMoreReviews()}
            data={this.state.shownReviews}
          />
          <div className="grid-item rating-reviews-buttons">
            <button
              className="button-RR rating-reviews-button-show-more"
              onClick={this.handleMoreReviews}
            >
              More Reviews
            </button>
            <ModalViewer
              data={this.state.product}
              metaData={this.state.reviewMetaData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsReviews;
