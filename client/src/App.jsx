import React from 'react';
import {getProducts} from '../Controllers/general.js';

//import Overview from './Components/Overview';
import RelatedOutfit from './Components/Related-Outfit/RelatedOutfit';
//import QuestionsAnswers from './Components/Questions-Answers';
import RatingsReviews from './Components/Shared/Stars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    getProducts((results) => {
      this.setState({products: results});
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {/* <Overview/> */}
        <RelatedOutfit products={this.state.products}/>
        {/* <QuestionsAnswers/> */}
        <RatingsReviews/>
      </div>
    );
  }
}

export default App;
