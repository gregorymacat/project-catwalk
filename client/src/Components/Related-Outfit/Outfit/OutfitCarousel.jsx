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
      leftVisible: false,
      rightVisible: false,
      outfitItems: [],
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
        outfitItems: outfits
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.outfitItems) === JSON.stringify(prevState.outfitItems)) {
      return;
    }
    window.localStorage.setItem('cachedClothes', JSON.stringify(this.state.outfitItems));
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
          this.setState({
            outfitItems: outfit
          });
          break;
        }
      }
    }
  }

  handleAddClick(event) {
    //console.log('Should be adding ', this.props.currentProduct);
    var outfitCopy = this.state.outfitItems.slice();
    var isUnique = outfitCopy.every((item) => {
      item.id !== this.props.currentProduct.id;
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
           add={<AddCard click={this.handleAddClick} atStart={this.state.atStart}/>}/>
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