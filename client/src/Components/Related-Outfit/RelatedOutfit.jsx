import React from 'react';
import RelatedCarousel from './RelatedProducts/RelatedCarousel.jsx';
import OutfitCarousel from './Outfit/OutfitCarousel.jsx';
import {getOneProduct} from '../../../Controllers/general.js';
import {getRelatedProductIds, getProductsByIds, getStylesByIds}
  from '../../../Controllers/related-outfit.js';
import testProduct from '../../dummy-product.js';
import testStyle from '../../dummy-style.js';

class RelatedOutfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [testProduct],
      styles: [testStyle]
    }
  }
  componentDidMount() {
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
      })
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.product)
    if (this.props.product === prevProps.product) {
      return;
    }
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
      })
    });
  }

  render(){
    return(
      <React.Fragment>
        <div className='related'>
          <RelatedCarousel currentProduct={this.props.product} products={this.state.products}
          styles={this.state.styles}/>
        </div>
        <div className='outfit'>
          <OutfitCarousel currentProduct={this.props.product}/>
        </div>

      </React.Fragment>

    )
  }
}

export default RelatedOutfit;