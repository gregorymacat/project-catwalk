import React from 'react';
import moment from 'moment';
import axios from 'axios';

import {reviewExampleData, reviewMetaExampleData}from './example.data'
import ReviewTile from './ReviewTile';
import ReviewForm from './ReviewForm';
import RatingsBreakdown from './RatingsBreakdown'
import {getAllReviews, getAllMetaReviews} from '../../../Controllers/ratings-reviews';
import Modal from '../Shared/Modal/Modal';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewTileData: reviewExampleData,
      reviewMetaData: reviewMetaExampleData

    };
    this.getReviews = this.getReviews.bind(this);
    this.getMetaReviews = this.getMetaReviews.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaReviews();
  }

  getMetaReviews() {
    var productId = '19093';
    getAllMetaReviews(productId, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          reviewMetaData: res.data
        })
      }
    })
  }

  getReviews() {
    getAllReviews({}, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          reviewTileData: res.data
        })
      }
    })
  }

  handleClick() {
    return <Modal />;
  }

  render() {
    return(
      <div className="ratings-reviews">
        <div className="grid-container ratings-reviews-dispay">
          <RatingsBreakdown metaData={this.state.reviewMetaData}/>
          <ReviewTile data={this.state.reviewTileData}/>
        </div>
        <div className="rating-reviews-buttons">
          <div className="rating-reviews-button-show-more">
            <button>More Reviews</button>
          </div>
          <div className="rating-reviews-button-form">
            <button onClick={() => this.handleClick()}>Add A Review</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingsReviews;