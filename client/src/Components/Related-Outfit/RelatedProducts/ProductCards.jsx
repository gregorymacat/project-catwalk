import React from 'react';

var ProductCards = function(props) {
  var cards = chooseCards(props.startIndex, props.allProducts);
  var handleClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    console.log(itemId);
    props.click('compare', itemId);
  }

  return (
    <React.Fragment>
      {
        cards.map((card) => {
          return (
            <div key={card.id} className='carousel item product-card'>
              <span id='compare' className='action fa fa-star'
               onClick={handleClick} data-itemNum={card.id}></span>
              <div>
                <img src={getImage(card.id, props.allStyles)}></img>
              </div>
              <p>{card.category}</p>
              <p>{card.name}</p>
              <p>{card.default_price}</p>
            </div>
        )})
      }
    </React.Fragment>
  )
}

var chooseCards = function(index, products) {
  var displayCards = [];
  var i = index;
  var onDisplay = 0;
  if (products.length === 0) {
    return displayCards;
  }
  while (onDisplay < 4 && i <= products.length - 1) {
    displayCards.push(products[i]);
    onDisplay++;
    i++;
  }
  return displayCards;
}

var getImage = function(productId, styles) {
  for (var index = 0; index < styles.length; index++) {
    if (styles[index].product_id === productId.toString()) {
      return styles[index].results[0].photos[0].thumbnail_url;
    }
  }
  return 'https://picsum.photos/seed/picsum/300/80';

}

export default ProductCards;