import React from 'react';
import ArrowLeft from '../Shared/Carousel/Left.jsx';
import ArrowRight from '../Shared/Carousel/Right.jsx';
import Item from '../Shared/Carousel/Item.jsx'

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
        <div className='carousel container' style={{ ...styles.VerticalCarousel }}>
          {this.displayArrow('left')}
          <Item item={this.props.items[this.state.displayIndex]} styles={styles} />
          {this.displayArrow('right')}
        </div>
      </React.Fragment>
    )
  }
}

export default Carousel;