import React from 'react';

var Item = function(props) {
  const {
    styles = {}
  } = props
  return (
    <div className='carousel item'>
      <img src={props.item.thumbnail_url} alt="main-photo" style={{ ...styles.image }} />
    </div>
  )
}

export default Item;