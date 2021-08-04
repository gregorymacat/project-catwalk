import React from 'react';

class StarsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfStars: 0,
      starSelected: undefined,
      starOnHover: -1
    }

    this.setRating = this.setRating.bind(this);
    this.setHover = this.setHover.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  setRating(stars) {
    this.props.modalCallback(stars + 1);
    this.setState({
      starSelected: stars,
      starOnHover: stars - 1,
      numberOfStars: stars + 1
    });
  }

  setHover (index) {
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
      <div className="stars-form">
        {[...Array(5)].map((star, index) => {
          return (
            <i
              key={index}
              className={index <= (this.state.starSelected || this.state.starOnHover) ? "fas fa-star": "far fa-star"}
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

export default StarsForm;