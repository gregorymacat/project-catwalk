// import React from 'react';
// import styles from './styles.js'
// var ArrowDown = function(props) {
//   var handleClick = () => {
//     var index = props.index;
//     if (index + 1 < props.max - 1) {
//       props.click({
//         displayIndex: index + 1,
//         leftVisible: true,
//         rightVisible: true
//       });
//     } else {
//       props.click({
//         displayIndex: index + 1,
//         rightVisible: false
//       });
//     }
//   }

//   if (props.isDisplaying) {
//     return (
//         <div className='carousel down'>
//           <img src='Assets/Icons/ArrowForward/2x/outline_arrow_forward_black_24dp.png'
//           onClick={handleClick} id="arrow-forward" alt="Image of the arrow to the down"></img>
//         </div>
//     )
//   }
//   return <div className='carousel down'></div>;
// }

// export default ArrowDown;