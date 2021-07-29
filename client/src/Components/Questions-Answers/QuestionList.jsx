import React from 'react';
import Question from './Question';
import QuestionModal from './QuestionModal';
import {getAnswersByQuestionId} from '../../../Controllers/questions-answers.js';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      filteredQuestions: [],
      AnswerAmount: 4
    };
  }

  render () {
    return <div></div>
  }
}

export default QuestionList;