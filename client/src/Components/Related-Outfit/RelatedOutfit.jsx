import React from 'react';
import CardCarousel from './CardCarousel.jsx';

class RelatedOutfit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.log(event.target.id);
    var id = event.target.id;
    if (id === 'arrow-back') {
      if (this.state.displayIndex === 0) {
        this.setState({displayIndex: this.props.products.length - 1});
      } else {
        this.setState({displayIndex: this.state.displayIndex - 1});
      }
    } else if (id === 'arrow-forward') {
      if (this.state.displayIndex === this.props.products.length - 1) {
        this.setState({displayIndex: 0});
      } else {
        this.setState({displayIndex: this.state.displayIndex + 1});
      }
    }
  }

  render(){
    console.log(this.props.products);
    return(
      <div className='related'>
        <CardCarousel startIndex={this.state.displayIndex} products={this.props.products}
          handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default RelatedOutfit;