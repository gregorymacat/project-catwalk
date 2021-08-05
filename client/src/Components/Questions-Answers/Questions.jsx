import React from 'react';
import AnswerModal from './AnswerModal';
import QuestionEntry from './QuestionEntry';
import QuestionModal from './QuestionModal';
import SubmitQuestion from './SubmitQuestion';


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addQuestion: false,
    };
    this.addQuestions = this.addQuestions.bind(this);
  }

  addQuestions() {
    let { addQuestion } = this.state;
    addQuestion = !addQuestion;
    this.setState({ addQuestion });
  }

  render() {
    const { questions, allQuestions, product, onClick } = this.props;
    const { addQuestion } = this.state;
    if (!questions) {
      questions = questionList.results;
    }
    if (questions) {
      questions.sort((first, last) => (last.question_helpfulness - first.question_helpfulness));
    }
      var questionBody = questions.map((question) => (
        <div key={question.question_id}>
          <QuestionEntry question={question} product={question.question_id}/>
          <br></br>
        </div>
      ));

    const moreQuestionsButton = (
      <button className="button-big" onClick={onClick}>
        More Questions
      </button>
    );
    if (questionBody) {
      return (
        <div className="question_body">
          {questionBody}
          {moreQuestionsButton}
          <button className="big-green-button" onClick={this.addQuestions}>Add a Question</button>
        {addQuestion && (
          <QuestionModal submit={this.addQuestions}>
            <SubmitQuestion productName={product} productId={product.product_id} />
          </QuestionModal>
        )}
        </div>
      );
    }

  }
}


export default Questions;