import React from 'react';

//Display 5 cards at a time as a horizontal list
//Left arrow, scrolls items to the left
//Right arrow, scrolls items to the right

var CardCarousel = function(props){
  console.log(props.products);
  return(
    <React.Fragment>
      {/* <Arrow direction='left'/> */}
      <div className='arrow-left'>
        <img src='Assets/Icons/ArrowBack/2x/outline_arrow_back_black_24dp.png'
          onClick={props.handleClick} id="arrow-back"></img>
      </div>
      <div className='card-container'>
        {
          chooseCards(props.startIndex, props.products)
          // props.products.map((product) => {
          //   return (
          //   <div key={product.id} className='product-card'>
          //     <p>{product.category}</p>
          //     <p>{product.name}</p>
          //     <p>{product.default_price}</p>
          //   </div>
          //   )
          // })
        }
      </div>
      <div className='arrow-right'>
        <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'
          onClick={props.handleClick} id="arrow-forward"></img>
      </div>
      {/* <Arrow direction='right'/> */}
    </React.Fragment>
  )
}

var chooseCards = function(index, products) {
  var displayCards = [];
  if (products.length === 0) {
    return displayCards;
  }
  for (var i = index; i <= index + 3; i++) {
    var currentIndex = i;
    if (i >= products.length){
      currentIndex = i - products.length;
    }
    var currentProduct = products[currentIndex];
    displayCards.push(
      <div key={currentProduct.id} className='product-card'>
        <p>{currentProduct.category}</p>
        <p>{currentProduct.name}</p>
        <p>{currentProduct.default_price}</p>
      </div>
    );
  }
  return displayCards;
}

export default CardCarousel;