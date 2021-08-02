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

  console.log('These are the current cards to print ', cards);
  return (
    <React.Fragment>
      {
        cards.map((card) => {
          return (
            <div key={generateId()} className='carousel item product-card'>
              <span id='compare' className='action fa fa-star'
               onClick={handleActionClick} data-itemnum={card.id}></span>
              <div>
                <img src={getImage(card.id, props.allStyles)}></img>
              </div>
              <p>{card.category}</p>
              <p onClick={handleItemClick} data-itemnum={card.id}>{card.name}</p>
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
  console.log('Shouldn\'t be any products ', displayCards)
  while (onDisplay < 4 && i <= products.length - 1) {
    console.log('Amount displaying ', onDisplay);
    console.log('Going to display ', products[i].name, ' from index ', i);
    displayCards.push(products[i]);
    onDisplay++;
    i++;
    console.log('Should be accumulating cards ', displayCards)
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

var generateId = function() {
  var id = '';
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  for (var i = 0; i < 10; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

export default ProductCards;