import React from 'react';
import RenderCards from './RenderCards.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import AddCard from './AddCard.jsx';
import testOutfit from '../../../dummy-outfit.js';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      leftVisible: false,
      rightVisible: true,
      outfitItems: testOutfit
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //   outfitItems: <AddCard click={this.handleAddClick}/>
  //   });
  // }

  handleArrowClick = (newState) => {
    this.setState(newState);
  };

  handleActionClick(action, itemId) {
    console.log(typeof itemId);
    if (action === 'remove') {
      var outfit = this.state.outfitItems;
      for (var index = 0; index < outfit.length; index++) {
        if (outfit[index].id.toString() === itemId) {
          this.setState({
            outfitItems: outfit.splice(index, 1)
          });
        }
      }
    }
  }

  handleAddClick(event) {
    console.log('Should be adding ', this.props.currentProduct);
    var outfitCopy = this.state.outfitItems.slice();
    outfitCopy.push(this.props.currentProduct);
    this.setState({
      outfitItems: outfitCopy
    });
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
        <ArrowLeft click={this.handleArrowClick} isDisplaying={displayLeft}  index={startIndex}/>
        <div className='carousel container cards'>
          <RenderCards startIndex={startIndex} allProducts={products}
           allStyles={styles} click={this.handleActionClick} add={<AddCard click={this.handleAddClick}/>}/>
        </div>
        <ArrowRight click={this.handleArrowClick} isDisplaying={displayRight}  index={startIndex} max={this.state.outfitItems.length}/>
      </React.Fragment>
    )
  }
}

export default OutfitCarousel;