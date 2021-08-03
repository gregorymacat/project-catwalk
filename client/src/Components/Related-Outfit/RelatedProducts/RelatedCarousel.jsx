import React from 'react';
import ProductCards from './ProductCards.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import TableModal from './TableModal.jsx';
import {getOneProduct} from '../../../../Controllers/general.js';

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      leftVisible: false,
      rightVisible: true,
      displayModal: false,
      compareItem: {}
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
  }

  handleArrowClick = (newState) => {
    this.setState(newState);
  };

  handleActionClick(action, itemId) {
    if (action === 'compare') {
      var products = this.props.products
      for (var index = 0; index < products.length; index++) {
        if (products[index].id.toString() === itemId) {
          this.setState({
            displayModal: true,
            compareItem: products[index]
          });
        }
      }

    } else if (action === 'close') {
      this.setState({displayModal: false});
    }
  }

  displayArrow(direction) {
    if (direction === 'left') {
      if (this.state.leftVisible) { return  }
      return <div className='carousel left'></div>
    } else if (direction === 'right') {
      if (this.state.rightVisible) { return  }
      return <div className='carousel right'></div>
    }
  }

  render () {
    const startIndex = this.state.displayIndex;
    const displayLeft = this.state.leftVisible;
    const displayRight = this.state.rightVisible;
    const displayModal = this.state.displayModal;
    const products = this.props.products;
    const styles = this.props.styles;

    return (
      <React.Fragment>
        <TableModal click={this.handleActionClick} display={displayModal} current={this.props.currentProduct}
        compareTo={this.state.compareItem}/>
        <ArrowLeft click={this.handleArrowClick} isDisplaying={displayLeft}  index={startIndex}/>
        <div className='carousel container cards'>
          <ProductCards startIndex={startIndex} allProducts={products} allStyles={styles} ratings={this.props.ratings}
          actionClick={this.handleActionClick} itemClick={this.props.appClick}/>
        </div>
        <ArrowRight click={this.handleArrowClick} isDisplaying={displayRight}  index={startIndex} max={this.props.products.length}/>
      </React.Fragment>
    )
  }
}

export default RelatedCarousel;