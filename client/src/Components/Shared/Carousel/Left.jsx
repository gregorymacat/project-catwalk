import React from 'react';

var ArrowLeft = function(props) {
  return (
    <div className='carousel left'>
      <img src='Assets/Icons/ArrowBack/2x/outline_arrow_back_black_24dp.png'
      onClick={props.click} id="arrow-back"></img>
    </div>
  )
}

export default ArrowLeft;