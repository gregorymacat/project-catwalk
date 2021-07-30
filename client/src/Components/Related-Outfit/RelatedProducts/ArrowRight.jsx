import React from 'react';

var ArrowRight = function(props) {
  if (props.isDisplaying) {
    return (
        <div className='carousel right'>
          <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'
          onClick={props.click} id="arrow-forward"></img>
        </div>
    )
  }
  return <div className='carousel right'></div>;
}

export default ArrowRight;