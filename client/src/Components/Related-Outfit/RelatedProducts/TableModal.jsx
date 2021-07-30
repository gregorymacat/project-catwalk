import React from 'react';

var TableModal = function(props) {
  if (props.display) {
    return (
      <div className='modal-body'>
        <div className='modal-content table'>
          <span id='close' className="fa fa-times"
            onClick={props.click}></span>
          <table>
            <thead>
              <tr>
                <th>Currently Viewing</th>
                <th>Characteristic</th>
                <th>Selected Item</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p>First Item Details</p></td>
                <td><p>Something</p></td>
                <td><p>Second Item Details</p></td>
              </tr>
              <tr>
                <td><p>More First Item Details</p></td>
                <td><p>Another Thing</p></td>
                <td><p>More Second Item Details</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return null;
}

export default TableModal;