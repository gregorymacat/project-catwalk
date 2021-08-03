import React from 'react';
import StarsDisplay from '../../Shared/StarsDisplay.jsx';

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
            <div key={generateId()} className='carousel item product-card'>
              <span id='compare' className='action fa fa-star'
               onClick={handleActionClick} data-itemnum={card[0].id}></span>
              <div>
                <img src={getImage(card[0].id, props.allStyles)}></img>
              </div>
              <p>{card[0].category}</p>
              <p onClick={handleItemClick} data-itemnum={card[0].id}>{card[0].name}</p>
              <p>{card[0].default_price}</p>
              <StarsDisplay starsData={parseFloat(props.ratings[card[1]])}/>
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
    displayCards.push([products[i], i]);
    onDisplay++;
    i++;
  }
  return displayCards;
}

var getImage = function(productId, styles) {
  for (var index = 0; index < styles.length; index++) {
    if (styles[index].product_id === productId.toString()) {
      var styleIndex = styles[index].results.findIndex((style) => {
        return style['default?'] === true;
      });
      if (styleIndex === -1) {
        return styles[index].results[0].photos[0].thumbnail_url;
      }
      if (styles[index].results[styleIndex].photos[0].thumbnail_url === null) {
        return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
      }
      return styles[index].results[styleIndex].photos[0].thumbnail_url;
    }
  }
  return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
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