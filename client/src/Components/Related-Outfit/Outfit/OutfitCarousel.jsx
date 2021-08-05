import React from 'react';
import RenderCards from './RenderCards.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import AddCard from './AddCard.jsx';
import testOutfit from '../../../dummy-outfit.js';
import testProduct from '../../../dummy-product.js';
import {getOneProduct} from '../../../../Controllers/general.js';
import {getStylesByIds, getMetadataByIds} from '../../../../Controllers/related-outfit.js';

class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      outfitItems: [],
      styles: [],
      ratings: [],
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

    var outfitIds = this.state.outfitItems.map((item) => {
      return item.id;
    })
    getStylesByIds(outfitIds, (err, responses) => {
      if (err) { return console.log('Unable to get styles: ', err); }
      var photos = responses.map((response) => {
        return response.data;
      })
      this.setState({styles: photos});
    })
    getMetadataByIds(outfitIds, (err, responses) => {
      if (err) { return console.log('Unable to get all review data: ', err); }
      var allReviewData = responses.map((response) => {
        return response.data;
      });
      allReviewData = allReviewData.map((oneReview) => {
        var totalStars = 0;
        var numberOfReviews = 0;
        for (var key in oneReview.ratings) {
          totalStars += parseInt(oneReview.ratings[key]) * key;
          numberOfReviews += parseInt(oneReview.ratings[key]);
        }
        return (totalStars / numberOfReviews).toFixed(1);
      });
      this.setState({ratings: allReviewData});
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.outfitItems) === JSON.stringify(prevState.outfitItems)) {
      return;
    }
    window.localStorage.setItem('cachedClothes', JSON.stringify(this.state.outfitItems));
    if (this.state.outfitItems.length === 0) {
      this.setState({
        rightVisible: false
      });
    }
    var outfitIds = this.state.outfitItems.map((item) => {
      return item.id;
    })

    getStylesByIds(outfitIds, (err, responses) => {
      if (err) { return console.log('Unable to get styles: ', err); }
      var photos = responses.map((response) => {
        return response.data;
      })
      this.setState({styles: photos});
    })
    getMetadataByIds(outfitIds, (err, responses) => {
      if (err) { return console.log('Unable to get all review data: ', err); }
      var allReviewData = responses.map((response) => {
        return response.data;
      });
      var totalStars = 0;
      var numberOfReviews = 0;
      allReviewData = allReviewData.map((oneReview) => {
        for (var key in oneReview.ratings) {
          totalStars += parseInt(oneReview.ratings[key]) * key;
          numberOfReviews += parseInt(oneReview.ratings[key]);
        }
        return (totalStars / numberOfReviews).toFixed(1);
      });
      this.setState({ratings: allReviewData});
    });
  }

  handleArrowClick = (newState) => {
    this.setState(newState);
  };

  handleActionClick(action, itemId) {
    if (action === 'remove') {
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
    const styles = this.state.styles;

    return (
      <React.Fragment>
        <ArrowLeft click={this.handleArrowClick} isDisplaying={displayLeft} index={startIndex}
        atStart={this.state.atStart}/>
        <div className='carousel container cards'>
          <RenderCards startIndex={startIndex} allProducts={products}
          allStyles={styles} click={this.handleActionClick} atStart={this.state.atStart}
          ratings={this.state.ratings} appClick={this.props.appClick}
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