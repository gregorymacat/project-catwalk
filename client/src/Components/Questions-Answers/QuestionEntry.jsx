import React from 'react';
import Answer from './Answer';
import {reportQuestionsById, putHelpfulQuestionsById} from '../../../Controllers/questions-answers.js';
import AnswerModal from './AnswerModal';
import axios from 'axios';
import QuestionModal from './QuestionModal';
import AnswerForm from './AnswerForm';

class QuestionEntry extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    fullAnswerList: [],
    answerList: [],
    isCollapsed: false,
    helpfulStatus: false,
    addAnswers: false,
  };
  this.onClick = this.onClick.bind(this);
  this.callHelpful = this.callHelpful.bind(this);
  this.handleAddAnswer = this.handleAddAnswer.bind(this);
}

componentDidMount() {
  const { question } = this.props;
  var answers = [];
  for (var x in question.answers) {
    answers.push(question.answers[x]);
  }
  //sort answers according to helpfulness, most helpful first in list
  answers.sort((a, b) => b.helpfulness - a.helpfulness);
  const fullAnswerList = answers.map((answer) => (
    <div key={answer.id}>
      <hr></hr>
      <Answer answer={answer} />
    </div>
  ));
  const answerList = fullAnswerList.slice(0, 1);
  this.setState({ fullAnswerList, answerList });
}

handleAddAnswer() {
  var { addAnswers } = this.state;
  addAnswers = !addAnswers;
  this.setState({ addAnswers });
}

onClick() {
  let { isCollapsed } = this.state;
  isCollapsed = !isCollapsed;
  this.setState({ isCollapsed });
}

callHelpful() {
  const { question } = this.props;
  const { helpfulStatus } = this.state;
  if (!helpfulStatus && question) {
    axios.put(`/qa/questions/${question.id}/helpful`)
      .then((res) => {
        this.setState({ helpfulStatus: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

render() {
  const { question, product} = this.props;
  const {
    answerList, fullAnswerList, isCollapsed, helpfulStatus, addAnswers
  } = this.state;
  if (isCollapsed) {
    var buttonText = 'Collapse Answers';
  } else if (!isCollapsed) {
    var buttonText = 'More Answers';
  }
  const answersButton = (
    <button className="mid-button" onClick={this.onClick}>
      {buttonText}
    </button>
  );

  return (
    <div className="question_wrapper">
      <hr></hr>
      <div className="question_body"><h5>Q: {question.question_body}</h5></div>
      <span>
        <span><font size="1">Helpful?  </font></span>
        <button className="qa-button-small" onClick={this.callHelpful}>Yes</button>
      </span>
      <button className="green-button" onClick={this.handleAddAnswer}>Add Answer</button>
      {addAnswers && (
            <AnswerModal submit={this.handleAddAnswer}>
              <AnswerForm
                productName={product}
                questionBody={question}
                questionId={product}
              />
            </AnswerModal>
          )}
      <span className="qa_label" id="a_label"><br></br></span>
      <div className="answers">
        <span>A: </span>
        <div className="allAnswers">
          {isCollapsed ? fullAnswerList : answerList}
        </div>
        {fullAnswerList.length > answerList.length && answersButton}
      </div>
    </div>
  );
}
}

export default QuestionEntry;