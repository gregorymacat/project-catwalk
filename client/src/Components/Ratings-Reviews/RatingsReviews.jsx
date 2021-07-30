import React from 'react';
import moment from 'moment';
import axios from 'axios';

import ReviewTile from './ReviewTile';
import ReviewForm from './ReviewForm';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewTileData:
        {
          product: 2,
          page: 0,
          count: 5,
          results: [
            {
              review_id: 5,
              rating: 3,
              summary: "I'm enjoying wearing these shades",
              recommend: false,
              response: null,
              body:  "ut labore et dolore magna amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magnalaboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
              date: "2019-04-14T00:00:00.000Z",
              reviewer_name: "shortandsweeet",
              helpfulness: 5,
              photos: [{
                  id: 1,
                  url: "urlplaceholder/review_5_photo_number_1.jpg"
                },
                {
                  id: 2,
                  url: "urlplaceholder/review_5_photo_number_2.jpg"
                }
              ]
            }
          ]
        }

    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/reviews/?page=1&count=5&sort=newest&product_id=19093')
      .then((response) => {
        this.setState({
          reviewTileData: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return(
      <ReviewTile data={this.state.reviewTileData}/>
      <ReviewForm />
    )
  }
}

export default RatingsReviews;