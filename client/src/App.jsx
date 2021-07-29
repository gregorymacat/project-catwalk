import React from 'react';
import {getProducts, getProduct} from '../Controllers/general.js';

import Overview from './Components/Overview';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit';
//import QuestionsAnswers from './Components/Questions-Answers';
//import RatingsReviews from './Components/Ratings-Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {}
    }
  }

  async componentDidMount(){
    var product_id = 19093
    await getProducts((results) => {
      this.setState({products: results});
    })
    await getProduct((results) => {
      console.log("RESULTS!!!", results)
    }, product_id)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Overview/>
        <RelatedOutfit products={this.state.products}/>
        {/* <QuestionsAnswers/> */}
        {/* <RatingsReviews/> */}
      </div>
    );
  }
}

export default App;
