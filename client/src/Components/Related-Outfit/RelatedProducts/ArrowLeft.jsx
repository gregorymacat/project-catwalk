import React from 'react';

var ArrowLeft = function(props) {
  var handleClick = () => {
    var index = props.index;
    if (!(index - 1 > 0)) {
      props.click({
        displayIndex: index - 1,
        leftVisible: false
      });
    } else {
      props.click({
        displayIndex: index - 1,
        leftVisible: true,
        rightVisible: true
      });
    }
  }

  if (props.isDisplaying) {
    return (
      <div className='carousel left'>
        <img src='Assets/Icons/ArrowBack/2x/outline_arrow_back_black_24dp.png'
        onClick={handleClick} id="arrow-back" alt="Image of the left arrow"></img>
      </div>
    )
  }
  return <div className='carousel left'></div>;
}

export default ArrowLeft;