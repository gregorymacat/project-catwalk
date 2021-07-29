import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import {getRelatedProductIds, getProductsByIds}
  from '../../../Controllers/related-outfit.js';
import testData from '../../dummy-data.js';

class RelatedOutfit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: [testData],
    }
    //this.updateProducts = this.updateProducts.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('Passed in product ID: ', this.props.product.id);
    // if (this.props.product.id === undefined) { return; }
    if (this.props.product === prevProps.product) {
      return;
    }
    getRelatedProductIds(this.props.product.id, (err, ids) => {
      if (err) { return console.log('Unable to get IDs: ', err); }

      var relatedItemIds = ids;
      //console.log('Related item IDs: ', relatedItemIds);
      getProductsByIds(relatedItemIds, (err, responses) => {
        if (err) { return console.log('Unable to get IDs: ', err); }
        var items = responses.map((response) => {
          return response.data;
        })
        this.setState({products: items});
      });
    });
  }

  render(){
    //console.log('RelatedOutfit state: ', this.state.products);
    // this.updateProducts();
    return(
      <div className='related'>
        <RelatedCarousel products={this.state.products}/>
      </div>
    )
  }
}

export default RelatedOutfit;