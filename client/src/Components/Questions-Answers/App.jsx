import React from 'react';

import Overview from './Components/Overview/index.jsx';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit.jsx';
import QuestionsList from './Components/Questions-Answers/QuestionList.jsx'
import StarsForm from './Components/Shared/StarsForm';
import StarsDisplay from './Components/Shared/StarsDisplay';
import RatingsReviews from './Components/Ratings-Reviews/RatingsReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsRating: 1.8,
      product: 17071,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(newProductID) {
    this.setState({
      product: newProductID
    });
  }

  render() {
    return (
      <div>
        {/* <Overview product={this.state.product} />
        <RelatedOutfit product={this.state.product} appClick={this.clickHandler}/> */}
        <QuestionsList product={this.state.product}/>
      </div>
    );
  }
}

export default App;