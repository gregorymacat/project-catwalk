import React from 'react';
import RenderCards from './RenderCards.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import AddCard from './AddCard.jsx';
import testOutfit from '../../../dummy-outfit.js';
import testProduct from '../../../dummy-product.js';
import {getOneProduct} from '../../../../Controllers/general.js';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      outfitItems: [],
      leftVisible: false,
      rightVisible: false,
      atStart: true
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  componentDidMount() {
    var outfits = window.localStorage.getItem('cachedClothes');
    if (outfits !== null) {
      outfits = JSON.parse(outfits);
      this.setState({
        outfitItems: outfits,
        rightVisible:  outfits.length === 0 ? false : true
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updating');
    if (JSON.stringify(this.state.outfitItems) === JSON.stringify(prevState.outfitItems)) {
      console.log('States are the same ', this.state.outfitItems, ' and ', prevState.outfitItems);
      return;
    }
    window.localStorage.setItem('cachedClothes', JSON.stringify(this.state.outfitItems));
    console.log('Number of items in outfit ', this.state.outfitItems.length);
    if (this.state.outfitItems.length === 0) {
      console.log('No items in outfit ', this.state.outfitItems.length);
      this.setState({
        rightVisible: false
      });
    }
  }


  handleArrowClick = (newState) => {
    this.setState(newState);
  };

  handleActionClick(action, itemId) {
    // console.log(typeof itemId);
    if (action === 'remove') {
      console.log('Clicked on x ')
      var outfit = this.state.outfitItems;

      for (var index = 0; index < outfit.length; index++) {
        if (outfit[index].id.toString() === itemId) {
          outfit.splice(index, 1)
          if (outfit.length === 0) {
            this.setState({
              displayIndex: 0,
              outfitItems: [],
              leftVisible: false,
              rightVisible: false,
              atStart: true
            });
          } else if (this.state.displayIndex > 0) {
            var index = this.state.displayIndex;
            this.setState({
              displayIndex: index - 1,
              outfitItems: outfit
            });
          } else {
            this.setState({
              outfitItems: outfit
            });
          }

          window.localStorage.setItem('cachedClothes', JSON.stringify(this.state.outfitItems));
        }
      }
    }
  }

  handleAddClick(event) {
    //console.log('Should be adding ', this.props.currentProduct);
    var outfitCopy = this.state.outfitItems.slice();
    var isUnique = outfitCopy.every((item) => {
      return item.id !== this.props.currentProduct.id;
    })
    if (!isUnique) {
      alert('You already added this item');
      return;
    }
    outfitCopy.push(this.props.currentProduct);
    if (this.state.outfitItems.length === 0) {
      this.setState({
        outfitItems: outfitCopy,
        rightVisible: true
      });
    } else {
      this.setState({
        outfitItems: outfitCopy,
      });
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
    const products = this.state.outfitItems;
    const styles = this.props.styles;

    return (
      <React.Fragment>
        <ArrowLeft click={this.handleArrowClick} isDisplaying={displayLeft} index={startIndex}
        atStart={this.state.atStart}/>
        <div className='carousel container cards'>
          <RenderCards startIndex={startIndex} allProducts={products}
          allStyles={styles} click={this.handleActionClick} atStart={this.state.atStart}
          add={<AddCard click={this.handleAddClick}/>}/>
        </div>
        <ArrowRight click={this.handleArrowClick} isDisplaying={displayRight} index={startIndex}
        atStart={this.state.atStart} max={this.state.outfitItems.length}/>
      </React.Fragment>
    )
  }
}

export default OutfitCarousel;



/*
{
  outfitItems: <AddCard click={this.handleAddClick}/>
}
*/