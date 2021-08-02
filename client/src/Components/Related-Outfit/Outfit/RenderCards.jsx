import React from 'react';

var RenderCards = function(props) {
  var cards = chooseCards(props.startIndex, props.allProducts, props.add, props.atStart);
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  )
}

var chooseCards = function(index, products, addCard, atStart) {
  var displayCards = [];
  var onDisplay = 0;
  //console.log('Cards before picking', displayCards);
  // while (onDisplay < 4 && i <= products.length) {
  //   if (i === 0) {
  //     displayCards.push(addCard);
  //   } else {
  //     displayCards.push(formatCard(products[i--]));
  //   }
  //   onDisplay++;
  //   i++;
  // }
  var itemCount = products.length;
  if (atStart) {
    displayCards.push(addCard);
    while (index < 3 && index < itemCount) {
      displayCards.push(formatCard(products[index]));
      index++;
    }
  } else {
    while (index < 4 && index < itemCount) {
      displayCards.push(formatCard(products[index]));
      index++;
    }
  }
  //console.log('Cards after picking', displayCards);

  return displayCards;
}

var formatCard = function(card) {
  if (card.id === undefined) {
    return card;
  }
  return (
    <div key={generateId()} className='carousel item product-card'>
      <span id='compare' className='action fa fa-star'
       onClick={handleClick} data-itemnum={card.id}></span>
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

var generateId = function() {
  var id = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321';
  for (var i = 0; i < 10; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export default RenderCards;