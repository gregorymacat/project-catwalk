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
      displayModal: false,
      leftVisible: false,
      rightVisible: true
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
    //console.log(id);
    if (id === 'compare') {
      this.setState({displayModal: true});
    } else if (id === 'close') {
      this.setState({displayModal: false});
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
    const products = this.props.products;
    const modal = this.state.displayModal ?
                  <TableModal click={this.handleActionClick}/> : <div></div>
    return (
      <React.Fragment>
        {modal}
        {this.displayArrow('left')}
        <div className='card-container'>
          <ProductCards startIndex={startIndex} allProducts={products}
          click={this.handleActionClick}/>
        </div>
        {this.displayArrow('right')}
      </React.Fragment>
    )
  }
}

export default RelatedCarousel;