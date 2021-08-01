import React from 'react';

var Filler = (props) => {
  return <div className="filler" style={{width: `${props.percentage}%`}}></div>;
};

export default Filler;