import React from 'react';

var ArrowRight = function(props) {
  // console.log(props.index);
  var handleClick = () => {
    var index = props.index;
    // console.log(index);
    if (index + 1 < props.max) {
      props.click({
        displayIndex: index + 1,
        leftVisible: true,
        rightVisible: true
      });
    } else {
      props.click({
        displayIndex: index + 1,
        rightVisible: false
      });
    }
  }

  if (props.isDisplaying) {
    return (
        <div className='carousel right'>
          <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'
          onClick={handleClick}></img>
        </div>
    )
  }
  return <div className='carousel right'></div>;
}

export default ArrowRight;