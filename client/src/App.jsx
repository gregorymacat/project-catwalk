import React from 'react';
import {getOneProduct} from '../Controllers/general.js';

import Overview from './Components/Overview';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit';
//import QuestionsAnswers from './Components/Questions-Answers';
import RatingsReviews from './Components/Shared/Stars';
import testData from './dummy-data.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [testData]
    }
  }

  componentDidMount(){
    getOneProduct('19093', (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      //console.log('GOT NEW DATA FOR APP: ', results);
      this.setState({product: results});
    })
    await getProduct((results) => {
      console.log("RESULTS!!!", results)
    }, product_id)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
<<<<<<< HEAD
        <Overview/>
        <RelatedOutfit products={this.state.products}/>
=======
        {/* <Overview/> */}
        <RelatedOutfit product={this.state.product}/>
>>>>>>> f9d56108789bab85c07596831d49e05bc6140500
        {/* <QuestionsAnswers/> */}
        <RatingsReviews/>
      </div>
    );
  }
}

export default App;
