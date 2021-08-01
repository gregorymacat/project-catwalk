import React from 'react';
import AnswerModal from './AnswerModal';
import QuestionEntry from './QuestionEntry';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { questions, allQuestions, product, onClick } = this.props;
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
        </div>
      );
    }

  }
}


export default Questions;