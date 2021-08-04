import React from 'react';
import AnswerModal from './AnswerModal';
import QuestionEntry from './QuestionEntry';
import QuestionModal from './QuestionModal';
import QuestionForm from './QuestionForm';


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
    console.log(this.props);
    console.log(this.state);
    this.setState({ addQuestion });
  }

  render() {
    const { questions, allQuestions, product, onClick } = this.props;
    const { addQuestions } = this.state;

    //console.log(questions);
    if (!questions) {
      questions = questionList.results;
    }
    if (questions) {
      questions.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
    }
      var questionBody = questions.map((question) => (
        <div key={question.question_id}>
          <QuestionEntry question={question} product={question.question_id}/>
          <br></br>
        </div>
      ));

    const moreQuestionsButton = (
      <button className="more_questions_button" onClick={onClick}>
        See More Questions
      </button>
    );
    if (questionBody) {
      return (
        <div className="question_body">
          {questionBody}
          {moreQuestionsButton}
          <button className="qa_button" onClick={this.addQuestions}>Add a Question +</button>
        {(
          <QuestionModal submit={this.addQuestions}>
            <QuestionForm productName={product} productId={product.product_id} />
          </QuestionModal>
        )}
        </div>
      );
    }

  }
}


export default Questions;