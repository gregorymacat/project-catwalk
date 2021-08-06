import React from 'react';
import RelatedCarousel from './RelatedProducts/RelatedCarousel.jsx';
import OutfitCarousel from './Outfit/OutfitCarousel.jsx';
import {getOneProduct} from '../../../Controllers/general.js';
import {getRelatedProductIds, getProductsByIds,
        getStylesByIds, getMetadataByIds}
  from '../../../Controllers/related-outfit.js';
import testProduct from '../../dummy-product.js';
import testStyle from '../../dummy-style.js';
import testMetadata from './dummy-metadata.js';

class RelatedOutfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: [testProduct],
      products: [testProduct],
      styles: [testStyle],
      ratings: [testMetadata]
    }
  }

  componentDidMount() {
    getOneProduct(this.props.product.toString(), (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      this.setState({currentProduct: results});
    });
    getRelatedProductIds(this.props.product, (err, ids) => {
      if (err) { return console.log('Unable to get IDs: ', err); }
      var relatedItemIds = ids;
      getProductsByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get IDs: ', err); }
        var items = responses.map((response) => {
          return response.data;
        })
        this.setState({products: items});
      });
      getStylesByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get styles: ', err); }
        var photos = responses.map((response) => {
          return response.data;
        })
        this.setState({styles: photos});
      });
      getMetadataByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get all review data: ', err); }
        var allReviewData = responses.map((response) => {
          return response.data;
        })
        allReviewData = allReviewData.map((oneReview) => {
          var totalStars = 0;
          var numberOfReviews = 0;
          for (var key in oneReview.ratings) {
            totalStars += parseInt(oneReview.ratings[key]) * key;
            numberOfReviews += parseInt(oneReview.ratings[key]);
          }
          return (totalStars / numberOfReviews).toFixed(1);
        })
        this.setState({ratings: allReviewData});
      })
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.product === prevProps.product) {
      return;
    }
    getOneProduct(this.props.product.toString(), (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      this.setState({currentProduct: results});
    });
    getRelatedProductIds(this.props.product, (err, ids) => {
      if (err) { return console.log('Unable to get IDs: ', err); }
      var relatedItemIds = ids;
      getProductsByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get IDs: ', err); }
        var items = responses.map((response) => {
          return response.data;
        });
        this.setState({products: items});
      });
      getStylesByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get styles: ', err); }
        var photos = responses.map((response) => {
          return response.data;
        });
        this.setState({styles: photos});
      });
      getMetadataByIds(relatedItemIds, (err, responses) => {
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
    });
  }

  render(){
    return(
      <React.Fragment>
        <h1 className='related title'>Customers Also Viewed</h1>
        <div className='related' onClick={(e) => {this.props.handleInteraction(e, 'ro')}}>
          <RelatedCarousel currentProduct={this.state.currentProduct} products={this.state.products}
          styles={this.state.styles} appClick={this.props.appClick} productId={this.props.product}
          ratings={this.state.ratings}/>
        </div>
        <h1 className='outfit title'>Selected Outfit</h1>
        <div className='outfit'>
          <OutfitCarousel currentProduct={this.state.currentProduct} productId={this.props.product}
          appClick={this.props.appClick}/>
        </div>
      </React.Fragment>
    )
  }
}

export default RelatedOutfit;