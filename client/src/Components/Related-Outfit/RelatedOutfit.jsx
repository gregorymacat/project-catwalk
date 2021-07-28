import React from 'react';

class RelatedOutfit extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.products);
    return(
      <div>
        {
          this.props.products.map((product) => {
            return <div key={product.id}>{product.name}</div>
          })
        }
      </div>
    )
  }
}

export default RelatedOutfit;