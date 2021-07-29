import React from 'react';
import {getOneProduct} from '../Controllers/general.js';

import Overview from './Components/Overview/index.jsx';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit';
import QuestionsAnswers from './Components/Questions-Answers'
import StarsForm from './Components/Shared/StarsForm';
import StarsDisplay from './Components/Shared/StarsDisplay';
import RatingsReviews from './Components/Shared/Stars';
import testProduct from './dummy-product.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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
        <QuestionsAnswers/>
        <RatingsReviews/>
        <StarsDisplay starsData={this.state.starsRating}/>
        {/* <StarsForm/> */}
      </div>
    );
  }
}

export default App;
