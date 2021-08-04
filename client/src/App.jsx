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
      product: 17067,
    }
  }

  // componentDidMount(){
  //   getOneProduct('19093', (err, results) => {
  //     if (err) {
  //       return console.log('Unable to get a product: ', err)
  //     }
  //     this.setState({product: results});
  //   })
  // }

  render() {
    return (
      <div>
        <Overview product={this.state.product} />
        <RelatedOutfit product={this.state.product}/>
        <QuestionsList product={this.state.product}/>
        <RatingsReviews product={this.state.product}/>
        {/* <StarsDisplay starsData={this.state.starsRating}/> */}
        {/* <StarsForm/> */}
      </div>
    );
  }
}

export default App;