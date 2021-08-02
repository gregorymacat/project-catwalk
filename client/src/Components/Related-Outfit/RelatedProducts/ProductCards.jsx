import React from 'react';

var ProductCards = function(props) {
  var cards = chooseCards(props.startIndex, props.allProducts);
  var handleActionClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    props.actionClick('compare', itemId);
  }
  var handleItemClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    if (itemId === undefined) {
      return console.log('!!!ERROR: This item has no ID');
    }
    props.itemClick(itemId);
  }

  return (
    <React.Fragment>
      {
        cards.map((card) => {
          return (
            <div key={card.id} className='carousel item product-card'
              onClick={handleItemClick}>
              <span id='compare' className='action fa fa-star'
               onClick={handleActionClick} data-itemnum={card.id}></span>
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