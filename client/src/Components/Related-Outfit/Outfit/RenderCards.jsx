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
  if (index === 0) {
    displayCards.push(addCard);
    //oitemCount += 1;
  }
  for (var i = 0; i < itemCount; i++) {
    displayCards.push(formatCard(products[i]));
  }


  //console.log('Cards after picking', displayCards);

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