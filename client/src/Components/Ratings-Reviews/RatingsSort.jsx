import React from 'react';

class RatingsSort extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    var numberOfReviews = 0;
    for (var key in this.props.metaData.ratings) {
      numberOfReviews += parseFloat(this.props.metaData.ratings[key]);
    }
    return(
      <div className="grid-item ratings-sort">
        <label for="sortBy">{numberOfReviews} reviews, sorted by </label>
        <select name="cars" id="cars">
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="Newest">Newest</option>
        </select>
      </div>
    );
  }
}

export default RatingsSort;