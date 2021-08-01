import React from 'react';
import Answer from './Answer';
import {reportQuestionsById, putHelpfulQuestionsById} from '../../../Controllers/questions-answers.js';

class QuestionEntry extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    fullAnswerList: [],
    answerList: [],
    isCollapsed: false,
    helpfulStatus: false,
  };
  this.onClick = this.onClick.bind(this);
  this.callHelpful = this.callHelpful.bind(this);
}

componentDidMount() {
  const { question } = this.props;
  const answers = [];
  for (const x in question.answers) {
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

onClick() {
  let { isCollapsed } = this.state;
  isCollapsed = !isCollapsed;
  this.setState({ isCollapsed });
}

callHelpful() {
  const { helpfulStatus } = this.state;
  if (!helpfulStatus) {
        //AXIOS PUT REQUEST FOR HELPFUL
  }
}

render() {
  const { question, product} = this.props;
  const {
    answerList, fullAnswerList, isCollapsed, helpfulStatus,
  } = this.state;
  const buttonText = isCollapsed ? 'Collapse Answers' : 'See More Answers';
  const answersButton = (
    <button className="button" onClick={this.onClick}>
      {buttonText}
    </button>
  );

  return (
    <div className="question_wrapper">
      <hr></hr>
      <div className="question_body"><h3>Q: {question.question_body}</h3></div>
      <span className="question_tags">
        <span><font size="1">Helpful?  </font></span>
        <button className="small-btn" onClick={this.callHelpful}>Yes</button>
      </span>
      <span className="qa_label" id="a_label"><br></br></span>
      <div className="answers">
        <div className="allAnswers">
          {isCollapsed ? fullAnswerList : answerList}
        </div>
        <br></br>
        {fullAnswerList.length > answerList.length && answersButton}
      </div>
    </div>
  );
}
}

export default QuestionEntry;