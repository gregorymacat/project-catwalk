import React from 'react';
import ProductCard from './ProductCard.jsx';

var RenderCards = function(props) {
  // var argArray = [props.startIndex, props.allProducts, props.add,
  //   props.atStart];
  //var items = chooseItems(...argArray);
  var index = props.startIndex;
  var prodCount = props.allProducts.length;
  var items = [];
  var onDisplay = 0;

  if (props.atStart) {
    while (index < 3 && index < prodCount) {
      items.push(props.allProducts[index]);
      index++;
    }
    return (
      <React.Fragment>
        {props.add}
        {items.map((item) => {
          return <ProductCard product={item} click={props.click}/>
        })}
      </React.Fragment>
    )
  } else {
    while (index < 4 && index < prodCount) {
      items.push(props.allProducts[index]);
      index++;
    }
    return (
      <React.Fragment>
        {items.map((item) => {
          return <ProductCard product={item} click={props.actionClick}/>
        })}
      </React.Fragment>
    )
  }

}

var chooseItems = function(index, products, addCard, atStart) {
  var displayCards = [];
  var onDisplay = 0;

  var itemCount = products.length;
  if (atStart) {
    displayCards.push(addCard);
    while (index < 3 && index < itemCount) {
      displayCards.push(formatCard(products[index]), func);
      index++;
    }
  } else {

  }
  return displayCards;
}

export default RenderCards;