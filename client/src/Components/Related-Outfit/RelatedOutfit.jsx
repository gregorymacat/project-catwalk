import React from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';

class RelatedOutfit extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.products);
    return(
      <div className='related'>
        <RelatedCarousel products={this.props.products}
          handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default RelatedOutfit;