import React from 'react';
import moment from 'moment';
import axios from 'axios';

import {reviewExampleData, reviewMetaExampleData}from './example.data'
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import RatingsSort from './RatingsSort'
import RatingsBreakdown from './RatingsBreakdown'
import {getAllReviews, getAllMetaReviews} from '../../../Controllers/ratings-reviews';
import Modal from '../Shared/Modal/Modal';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
      reviewListData: reviewExampleData,
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
    getAllMetaReviews(this.state.product, (err, res) => {
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
    //var productInfo = {}
    getAllReviews({}, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          reviewListData: res.data
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
          <RatingsSort metaData={this.state.reviewMetaData} />
          <RatingsBreakdown metaData={this.state.reviewMetaData}/>
          <ReviewList data={this.state.reviewListData}/>
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