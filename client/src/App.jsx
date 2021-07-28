import React from 'react';
import {getOneProduct} from '../Controllers/general.js';

//import Overview from './Components/Overview';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit';
//import QuestionsAnswers from './Components/Questions-Answers';
import RatingsReviews from './Components/Shared/Stars';
import testProduct from './dummy-product.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {/* <Overview/> */}
        <RelatedOutfit product={this.state.product}/>
        {/* <QuestionsAnswers/> */}
        <RatingsReviews/>
      </div>
    );
  }
}

export default App;
