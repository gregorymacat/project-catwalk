import React from 'react';

var ArrowRight = function(props) {
  return (
      <div className='carousel right'>
        <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'
        onClick={props.click} id="arrow-forward"></img>
      </div>
  )
}

export default ArrowRight;