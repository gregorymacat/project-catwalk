import React from 'react';

var Modal = function(props) {
  if (props.display) {
    return (
      <div className='modal-body'>
        <div className='modal-content'>
          <span id='close' className='fa fa-times' onClick={props.click}></span>
          <span>Click on the "x" to close the modal</span>
        </div>

      </div>
    )
  }
  return null;
}

export default Modal;
