import React from 'react';

var RenderCards = function(props) {
  var cards = chooseCards(props.startIndex, props.allProducts, props.add);

  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  )
}

var chooseCards = function(index, products, addCard) {
  var displayCards = [];
  var i = index;
  var onDisplay = 0;

  if (index === 0) {
    displayCards.push(addCard);
    while (onDisplay < 3 && i <= products.length - 1) {
      displayCards.push(formatCard(products[i]));
      onDisplay++;
      i++;
    }
  } else {
    i = i - 1;
    while (onDisplay < 4 && i <= products.length - 1) {
      displayCards.push(formatCard(products[i]));
      onDisplay++;
      i++;
    }
  }
  return displayCards;
}

var formatCard = function(card) {
  return (
    <div key={card.id} className='carousel item product-card'>
      <span id='compare' className='action fa fa-star'
       onClick={handleClick} data-itemNum={card.id}></span>
      <p>{card.category}</p>
      <p>{card.name}</p>
      <p>{card.default_price}</p>
    </div>
  )
}

var handleClick = (event) => {
  var itemId = event.target.dataset.itemnum;
  props.click('compare', itemId);
}

var getImage = function(productId, styles) {
  for (var index = 0; index < styles.length; index++) {
    if (styles[index].product_id === productId.toString()) {
      return styles[index].results[0].photos[0].thumbnail_url;
    }
  }
  return 'https://picsum.photos/seed/picsum/300/80';

}

export default RenderCards;