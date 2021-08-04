import React from 'react';

class RatingsSort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortValue: 'relevant'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      sortValue: e.target.value
    })
  }

  render() {
    var numberOfReviews = 0;
    for (var key in this.props.prodRatings.ratings) {
      numberOfReviews += parseFloat(this.props.prodRatings.ratings[key]);
    }
    return(
      <div className="grid-item ratings-sort">
        <label htmlFor="sortBy">{numberOfReviews} reviews, sorted by </label>
        <select onChange={(value) => this.props.handleChange(this.sate.sortValue)} name="rating-sort-menu" id="sortValue">
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    );
  }
}

export default RatingsSort;