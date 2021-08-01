import React from 'react';
import {getOneProduct} from '../Controllers/general.js';

import Overview from './Components/Overview/index.jsx';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit.jsx';
import QuestionsList from './Components/Questions-Answers/QuestionList.jsx'
import StarsForm from './Components/Shared/StarsForm';
import StarsDisplay from './Components/Shared/StarsDisplay';
import RatingsReviews from './Components/Ratings-Reviews/RatingsReviews';
import testProduct from './dummy-product.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsRating: 1.8,
      product: [testProduct]
    }
  }

  componentDidMount(){
    getOneProduct('19093', (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      this.setState({product: results});
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Overview product={this.state.product} />
        <RelatedOutfit product={this.state.product}/>
        <QuestionsList/>
        <RatingsReviews/>
        {/* <StarsDisplay starsData={this.state.starsRating}/> */}
        {/* <StarsForm/> */}
      </div>
    );
  }
}

export default App;