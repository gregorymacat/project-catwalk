import React from 'react';

var ProductCard = function(props) {
  var handleActionClick = (event) => {
    var itemId = event.target.dataset.itemnum;
    props.click('remove', itemId);
  }

  var getImage = function() {
    console.log(props.styles);
    if (props.styles === undefined) {
      return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
    }
    for (var index = 0; index < props.styles.length; index++) {
      if (props.styles[index].product_id === props.product.id.toString()) {
        var styleIndex = props.styles[index].results.findIndex((style) => {
          return style['default?'] === true;
        });
        if (styleIndex === -1) {
          return props.styles[index].results[0].photos[0].thumbnail_url;
        }
        return props.styles[index].results[styleIndex].photos[0].thumbnail_url;
      }
    }
    return 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png';
  }

  var generateId = function() {
    var id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321';
    for (var i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  if (props.product === undefined) {
    return <div key={generateId()} className='carousel item product-card'></div>;
  }
  return (
      <div key={generateId()} className='carousel item product-card'>
        <span id='remove' className="action fa fa-times"
          onClick={handleActionClick} data-itemnum={props.product.id}></span>
        <div>
          <img src={getImage()}></img>
        </div>
        <p>{props.product.category}</p>
        <p>{props.product.name}</p>
        <p>{props.product.default_price}</p>
      </div>
  )
}

export default ProductCard;