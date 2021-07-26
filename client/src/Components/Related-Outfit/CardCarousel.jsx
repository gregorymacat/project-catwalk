import React from 'react';

//Display 5 cards at a time as a horizontal list
//Left arrow, scrolls items to the left
//Right arrow, scrolls items to the right

var CardCarousel = function(props){
  return(
    <React.Fragment>
      {/* <Arrow direction='left'/> */}
      <div className='arrow-left'>
        <img src='Assets/Icons/ArrowBack/2x/outline_arrow_back_black_24dp.png'></img>
      </div>
      <div className='card-container'>
        {
          props.products.map((product) => {
            return <div key={product.id} className='product-card'>{product.name}</div>
          })
        }
      </div>
      <div className='arrow-right'>
        <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'></img>
      </div>
      {/* <Arrow direction='right'/> */}
    </React.Fragment>
  )
}

export default CardCarousel;