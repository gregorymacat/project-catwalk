import React from 'react';

var ArrowLeft = function(props) {
  if (props.isDisplaying) {
    return (
      <div className='carousel left'>
        <img src='Assets/Icons/ArrowBack/2x/outline_arrow_back_black_24dp.png'
        onClick={props.click} id="arrow-back"></img>
      </div>
    )
  }
  return <div className='carousel left'></div>;
}

export default ArrowLeft;