import React from 'react';

var CharBarFiller = (props) => {
  return <div className="char-filler" style={{width: `${props.percentage}%`, content: "|"}}></div>;
};

export default CharBarFiller;