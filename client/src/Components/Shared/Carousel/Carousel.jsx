import React from 'react';
import ArrowLeft from './Left.jsx';
import ArrowRight from './Right.jsx';
import Item from './Item.jsx'

/*
  Props:
    items: Some array of items that will be displayed

  State:
    displayIndex: goes up and down by arrow clicks, decides
      which item in the items array to display
    leftVisible: if the display index is 0 the left arrow
      won't display, otherwise it will
    rightVisible: if the display index is at the length of
      the items it won't display, otherwise it will

  Methods:
    handleArrowClick: determines if an arrow should increment
      or decrement the display index, as well as if the arrow
      should continue to display (in render displayArrow())

  Example code to be inserted is at the bottom.
*/
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIndex: 0,
      leftVisible: false,
      rightVisible: true
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(event) {
    var id = event.target.id;
    if (id === 'arrow-back') {
      if (!(this.state.displayIndex - 1 > 0)) {
        this.setState({
            displayIndex: this.state.displayIndex - 1,
            leftVisible: false
          });
      } else {
        this.setState({
          displayIndex: this.state.displayIndex - 1,
          leftVisible: true,
          rightVisible: true
        });
      }
    } else if (id === 'arrow-forward') {
      if (!(this.state.displayIndex + 1 < this.props.items.length - 1)) {
        this.setState({
          displayIndex: this.state.displayIndex + 1,
          rightVisible: false
        });
      } else {
        this.setState({
          displayIndex: this.state.displayIndex + 1,
          leftVisible: true,
          rightVisible: true
        });
      }
    }
  }

  displayArrow(direction) {
    if (direction === 'left') {
      if (this.state.leftVisible) { return <ArrowLeft click={this.handleArrowClick} /> }
      return <div className='carousel left'></div>
    } else if (direction === 'right') {
      if (this.state.rightVisible) { return <ArrowRight click={this.handleArrowClick}/> }
      return <div className='carousel right'></div>
    }
  }

  render () {
    const { styles } = this.props
    return (
      <React.Fragment>
        {this.displayArrow('left')}
        <div className='carousel container' style={{ ...styles.container }}>
          <Item item={this.props.items[this.state.displayIndex]} styles={styles} />
        </div>
        {this.displayArrow('right')}
      </React.Fragment>
    )
  }
}

export default Carousel;

/*
Put these in the proper spots in app/here/Item if you want a
small example of how this works

import testStyle from './dummy-style.js';
import Carousel from './Components/Shared/Carousel/Carousel.jsx';
<Carousel items={testStyle.photos}/>
<img src={props.item.thumbnail_url}></img>
*/