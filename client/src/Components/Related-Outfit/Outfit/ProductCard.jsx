import React from 'react';

var ProductCard = function(props) {
  var handleActionClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    props.click('remove', itemId);
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

  return (
      <div key={generateId()} className='carousel item product-card'>
        <span id='remove' className="action fa fa-times"
          onClick={handleActionClick} data-itemnum={props.product.id}></span>
        <p>{props.product.category}</p>
        <p>{props.product.name}</p>
        <p>{props.product.default_price}</p>
      </div>
  )
}

export default ProductCard;