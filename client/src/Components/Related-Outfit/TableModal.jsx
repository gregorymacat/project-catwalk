import React from 'react';

var TableModal = function(props) {
  return (
    <div className='modal-body table'>
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
          <tr>
            <td><p>No way there's more</p></td>
            <td><p>Cooler Thing</p></td>
            <td><p>This is insane there's more</p></td>
          </tr>
          <tr>
            <td><p>It just keeps on going</p></td>
            <td><p>Less Cool Thing</p></td>
            <td><p>I can't believe it at this point</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableModal;