import React from 'react';
import ProductCard from './ProductCard.jsx';
import {generateId} from '../Helpers/helpers.js';

var RenderCards = function(props) {
  var index = props.startIndex;
  var prodCount = props.allProducts.length;
  var itemsTuple = [];
  var onDisplay = 0;

  if (props.atStart) {
    while (index < 3 && index < prodCount) {
      itemsTuple.push([props.allProducts[index], index]);
      index++;
    }
    return (
      <React.Fragment>
        {props.add}
        {itemsTuple.map((item) => {
          return <ProductCard key={generateId()} styles={props.allStyles} ratings={props.ratings[item[1]]}
          product={item[0]} click={props.click} appClick={props.appClick}/>
        })}
      </React.Fragment>
    )
  } else {
    while (index < 4 && index < prodCount) {
      itemsTuple.push([props.allProducts[index], index]);
      index++;
    }
    return (
      <React.Fragment>
        {itemsTuple.map((item) => {
          return <ProductCard styles={props.allStyles} ratings={props.ratings[item[1]]}
                  product={item[0]} click={props.click} appClick={props.appClick}/>
        })}
      </React.Fragment>
    )
  }
}

export default RenderCards;