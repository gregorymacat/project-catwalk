import React from 'react';
import ProductCards from './ProductCards.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import TableModal from './TableModal.jsx';


class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      leftVisible: false,
      rightVisible: true,
      displayModal: false,
      compareItem: []
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
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

  handleActionClick(event) {
    var id = event.target.id;
    if (id === 'compare') {
      this.setState({displayModal: true});
    } else if (id === 'close') {
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
        <TableModal click={this.handleActionClick} display={displayModal}/>
        <ArrowLeft click={this.handleArrowClick} isDisplaying={displayLeft}/>
        <div className='carousel container cards'>
          <ProductCards startIndex={startIndex} allProducts={products}
           allStyles={styles} click={this.handleActionClick}/>
        </div>
        <ArrowRight click={this.handleArrowClick} isDisplaying={displayRight}/>
      </React.Fragment>
    )
  }
}

export default RelatedCarousel;