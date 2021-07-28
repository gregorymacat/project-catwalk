import React from 'react';
import ProductCards from './ProductCards.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';

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
      if (this.state.leftVisible) { return <ArrowLeft click={this.handleArrowClick}/> }
      return <div className='arrow-left'></div>
    } else if (direction === 'right') {
      if (this.state.rightVisible) { return <ArrowRight click={this.handleArrowClick}/> }
      return <div className='arrow-right'></div>
    }
  }

  render () {
    const startIndex = this.state.displayIndex;
    const allProducts = this.props.products;
    return (
      <React.Fragment>
        {this.displayArrow('left')}
        <div className='card-container'>
          <ProductCards startIndex={startIndex} allProducts={allProducts}/>
        </div>
        {this.displayArrow('right')}
      </React.Fragment>
    )
  }
}

export default RelatedCarousel;