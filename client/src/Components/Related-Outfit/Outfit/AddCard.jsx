import React from 'react';
import {generateId} from '../Helpers/helpers.js';

var AddCard = function(props) {
  return (
    <div key={generateId()} className='carousel item add-card' >
      <img src='Assets/Icons/PlusSign/2x/outline_add_black_24dp.png'
      onClick={props.click} alt="Image of the add a new item card">
      </img>
    </div>
  )
}


export default AddCard;