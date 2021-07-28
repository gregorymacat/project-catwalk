import React from 'react';

//Display 5 cards at a time as a horizontal list
//Left arrow, scrolls items to the left
//Right arrow, scrolls items to the right

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      leftVisible: false,
      rightVisible: true
    }
    this.handleArrowClick = this.handleArrowClick.bind(this)
  }

  handleArrowClick(event) {
    var id = event.target.id;
    if (id === 'arrow-back') {
      if (!(this.state.displayIndex - 1 > 0)) {
        this.setState({
            displayIndex: this.state.displayIndex - 1,
            leftVisible: false
          });
      } else {
        this.setState({
          displayIndex: this.state.displayIndex - 1,
          leftVisible: true,
          rightVisible: true
        });
      }
    } else if (id === 'arrow-forward') {
      if (!(this.state.displayIndex + 1 < this.props.products.length - 1)) {
        this.setState({
          displayIndex: this.state.displayIndex + 1,
          rightVisible: false
        });
      } else {
        this.setState({
          displayIndex: this.state.displayIndex + 1,
          leftVisible: true,
          rightVisible: true
        });
      }
    }
  }

  displayArrow(direction) {
    if (direction === 'left') {
      if (this.state.leftVisible) {
        return (
          <div className='arrow-left'>
            <img src='Assets/Icons/ArrowBack/2x/outline_arrow_back_black_24dp.png'
            onClick={this.handleArrowClick} id="arrow-back"></img>
          </div>
        )
      } else {
        return <div className='arrow-left'></div>
      }
    } else if (direction === 'right') {
      if (this.state.rightVisible) {
        return (
          <div className='arrow-right'>
          <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'
            onClick={this.handleArrowClick} id="arrow-forward"></img>
        </div>
        )
      } else {
        return <div className='arrow-right'></div>
      }
    }
  }

  render () {
    const startIndex = this.state.displayIndex;
    const allProducts = this.props.products;
    //console.log(this.props.products);
    return(
      <React.Fragment>
        {/* <Arrow direction='left'/> */}
        {this.displayArrow('left')}
        <div className='card-container'>
          {chooseCards(startIndex, allProducts)}
        </div>
        {this.displayArrow('right')}
        {/* <Arrow direction='right'/> */}
      </React.Fragment>
    )
  }
}

var chooseCards = function(index, products) {
  var displayCards = [];
  var i = index;
  var onDisplay = 0;
  if (products.length === 0) {
    return displayCards;
  }
  while (onDisplay < 4 && i <= products.length - 1) {
    var currentProduct = products[i];
    displayCards.push(
      <div key={currentProduct.id} className='product-card'>
        <p>{currentProduct.category}</p>
        <p>{currentProduct.name}</p>
        <p>{currentProduct.default_price}</p>
      </div>
    );
    onDisplay++;
    i++;
  }
  return displayCards;
}

export default RelatedCarousel;