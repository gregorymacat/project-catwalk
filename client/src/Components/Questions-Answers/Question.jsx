import React from 'react';
import AnswerModal from './AnswerModal';
import Answers from './Answers';

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      helpfulness: 0
    }
  }
  render() {
    return (
        <div>
          <p>Question</p>
        </div>
    )
  }
}

export default Question;