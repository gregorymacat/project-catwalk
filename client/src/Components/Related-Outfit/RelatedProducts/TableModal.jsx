import React from 'react';

var TableModal = function(props) {
  var handleClick = (event) => {
    props.click('close');
  }

  if (props.display) {
    console.log('Current Items ', props.current.features, ' versus clicked on ', props.compareTo.features)

    return (
      <div className='modal-body'>
        <div className='modal-content table'>
          <span id='close' className="fa fa-times"
            onClick={handleClick}></span>
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
                <td><p>{props.current.name}</p></td>
                <td><p>Name</p></td>
                <td><p>{props.compareTo.name}</p></td>
              </tr>
              <tr>
                <td><p>{props.current.default_price}</p></td>
                <td><p>Price</p></td>
                <td><p>{props.compareTo.default_price}</p></td>
              </tr>
              <tr>
                <td><p>{props.current.category}</p></td>
                <td><p>Category</p></td>
                <td><p>{props.compareTo.category}</p></td>
              </tr>
              {getComparison(props.current.features, props.compareTo.features)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  return null;
}

var getComparison = (firstFeatures, secondFeatures) => {
  var tableData = [];
  var comparison = new Map();

  firstFeatures.forEach((item) => {
    comparison.set(item.feature, [item.value, null]);
  })
  secondFeatures.forEach((item) => {
    var sharedFeature = comparison.get(item.feature)
    if (sharedFeature !== undefined) {
      sharedFeature[1] = item.value;
      comparison.set(item.feature, sharedFeature);
    } else {
      comparison.set(item.feature, [null, item.value]);
    }
  })

  comparison.forEach((values, feature) => {
    tableData.push(
      <tr>
        <td><p>{values[0]}</p></td>
        <td><p>{feature}</p></td>
        <td><p>{values[1]}</p></td>
      </tr>
    )
  })
  return tableData;
}

export default TableModal;