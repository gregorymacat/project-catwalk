import React from 'react';

//Display 5 cards at a time as a horizontal list
//Left arrow, scrolls items to the left
//Right arrow, scrolls items to the right

var CardCarousel = function(props){
  return(
    <div>
      {/* <Arrow direction="left"/> */}
      <div className="arrow-left"></div>
      <div>
        {
          props.products.map((product) => {
            return <div key={product.id} className='product-card'>{product.name}</div>
          })
        }
      </div>
      <div className="arrow-right"></div>
      {/* <Arrow direction='right'/> */}
    </div>
  )
}

export default CardCarousel;