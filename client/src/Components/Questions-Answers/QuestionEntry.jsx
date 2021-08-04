import React from 'react';
import Answer from './Answer';
import {reportQuestionsById, putHelpfulQuestionsById} from '../../../Controllers/questions-answers.js';
import AnswerModal from './AnswerModal';
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
    showModal: false,
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

handleToggleModal() {
  let { showModal } = this.state;
  console.log(this.state.showModal);

  showModal = !showModal;
  this.setState({ showModal });
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
      <div className="question_body"><h5>Q: {question.question_body}</h5></div>
      <span>
        <span><font size="1">Helpful?  </font></span>
        <button className="small-btn" onClick={this.callHelpful}>Yes</button>
      </span>
      <button className="tag qa_button" onClick={this.handleToggleModal}>Add Answer</button>
          {(
            <AnswerModal submit={this.handleToggleModal}>
              <AnswerForm
                productName={product}
                questionBody={question}
                questionId={product}
              />
            </AnswerModal>
          )}
      <span className="qa_label" id="a_label"><br></br></span>
      <div className="answers">
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