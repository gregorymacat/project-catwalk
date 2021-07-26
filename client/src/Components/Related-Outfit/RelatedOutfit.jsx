import React from 'react';
import CardCarousel from './CardCarousel.jsx';

class RelatedOutfit extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.products);
    return(
      <div>
        <CardCarousel products={products}/>
      </div>
    )
  }
}

export default RelatedOutfit;