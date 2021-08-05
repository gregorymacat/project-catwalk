import React from 'react';

import Overview from './Components/Overview/index.jsx';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit.jsx';
import QuestionsList from './Components/Questions-Answers/QuestionList.jsx'
import StarsForm from './Components/Shared/StarsForm';
import StarsDisplay from './Components/Shared/StarsDisplay';
import RatingsReviews from './Components/Ratings-Reviews/RatingsReviews';
import {postInteractions} from '../Controllers/general.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsRating: 1.8,
      product: 17071,
      name: 'Heir Force Ones'
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  handleInteraction(event, widgetString) {
    var widgetNames = {
      'o': 'Overview',
      'rr': 'Ratings and Reviews',
      'qa': 'Questions and Answers',
      'ro': 'Related Products and Outfits'
    }
    var elementString = event.target.outerHTML.toString();
    var date = new Date();
    setTimeout(() => { postInteractions({
      element: elementString,
      widget: widgetNames[widgetString],
      time: date
    }, (err, response) => {
      if (err) {return console.log('!!!ERROR logging user interaction');}
      //console.log('Response ', response.config.data);
    })}, 3000);
  }

  clickHandler(newProductID, itemName) {
    this.setState({
      product: newProductID,
      name: itemName
    });
  }

  render() {
    return (
      <div>
        <Overview handleInteraction={this.handleInteraction} product={this.state.product} />
        <RelatedOutfit handleInteraction={this.handleInteraction} product={this.state.product}
          appClick={this.clickHandler}/>
        <QuestionsList handleInteraction={this.handleInteraction} product={this.state.product} prodName={this.state.name}/>
        <RatingsReviews handleInteraction={this.handleInteraction} product={this.state.product}/>
      </div>
    );
  }
}

export default App;