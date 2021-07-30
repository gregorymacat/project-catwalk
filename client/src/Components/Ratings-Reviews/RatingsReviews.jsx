import React from 'react';
import moment from 'moment';
import axios from 'axios';

import exampleData from './example.data'
import ReviewTile from './ReviewTile';
import ReviewForm from './ReviewForm';
import {getAll} from '../../../Controllers/ratings-reviews';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewTileData: exampleData

    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    getAll({}, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          reviewTileData: res.data
        })
      }
    })
  }

  render() {
    return(
      <ReviewTile data={this.state.reviewTileData}/>
    )
  }
}

export default RatingsReviews;