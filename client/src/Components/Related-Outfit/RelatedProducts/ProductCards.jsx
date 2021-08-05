import React from 'react';
import StarsDisplay from '../../Shared/StarsDisplay.jsx';
import {generateId} from '../Helpers/helpers.js';

var ProductCards = function(props) {
  var cards = chooseCards(props.startIndex, props.allProducts);
  var handleItemClick = (itemId, itemName) => {
    if (itemId === undefined) {
      return console.log('!!!ERROR: This item has no ID');
    }
    props.itemClick(itemId, itemName);
  }

  return (
    <React.Fragment>
      {
        cards.map((card) => {
          return (
            <div key={generateId()} className='carousel item product-card'>
              <span id='compare' className='action fa fa-star'
               onClick={()=>props.actionClick('compare', card[0].id)}></span>
              <div className='card-interaction' onClick={()=>handleItemClick(card[0].id, card[0].name)}>
                <div>
                  <img src={getImage(card[0].id, props.allStyles)} alt="Image of the product"></img>
                </div>
                <p>{card[0].category}</p>
                <b>{card[0].name}</b>
                <p>{card[0].default_price}</p>
                <StarsDisplay starsData={parseFloat(props.ratings[card[1]])}/>
              </div>
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
  if (styles === undefined) {
    return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
  }
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

export default ProductCards;