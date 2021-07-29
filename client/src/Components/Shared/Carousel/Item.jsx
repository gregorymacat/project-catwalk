import React from 'react';

var Item = function(props) {
  return (
    <div className='carousel item'>
      {props.item}
    </div>
  )
}

export default Item;