import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      numberOfStarts: undefined,
      starOnHover: -1
    }

    this.setRating = this.setRating.bind(this);
    this.setHover = this.setHover.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  setRating(stars) {
    this.setState({
      numberOfStarts: stars,
      starOnHover: stars - 1
    });
  }

  setHover (index) {
    console.log(index)
    this.setState({
      starOnHover: index
    });
  }

  mouseOut() {
    this.setState({
      starOnHover: -1
    });
  }


  render() {
    return (
      <div className="start-rating">
        {[...Array(5)].map((star, index) => {
          return (
            <i
              key={index}
              className={index <= (this.state.numberOfStarts || this.state.starOnHover) ? "fas fa-star": "far fa-star"}
              onClick={() => this.setRating(index)}
              onMouseOver={() => this.setHover(index)}
              onMouseOut={this.mouseOut}
            ></i>
          );
        })}
      </div>
    )
  }
}

export default Stars;