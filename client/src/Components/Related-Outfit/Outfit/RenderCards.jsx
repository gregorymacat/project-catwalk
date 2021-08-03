import React from 'react';

var RenderCards = function(props) {
  var handleActionClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    console.log('Clicked on x ')
    props.actionClick('remove', itemId);
  }

  var argArray = [props.startIndex, props.allProducts, props.add,
    props.atStart, handleActionClick];
  var cards = chooseCards(...argArray);
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  )
}

var chooseCards = function(index, products, addCard, atStart, func) {
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
      displayCards.push(formatCard(products[index]), func);
      index++;
    }
  } else {
    while (index < 4 && index < itemCount) {
      displayCards.push(formatCard(products[index]), func);
      index++;
    }
  }
  //console.log('Cards after picking', displayCards);

  return displayCards;
}

var formatCard = function(card, clickFunc) {
  if (card.id === undefined) {
    return card;
  }
  return (
    <div key={generateId()} className='carousel item product-card'>
      <span id='remove' className="action fa fa-times"
        onClick={clickFunc} data-itemnum={card.id}></span>
      <p>{card.category}</p>
      <p>{card.name}</p>
      <p>{card.default_price}</p>
    </div>
  )
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