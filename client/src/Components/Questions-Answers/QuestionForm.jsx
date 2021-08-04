import React from 'react';
import axios from 'axios';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 'Hello',
      name: '-',
      email: 'bobsmith1@gmail.com'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

  }

  handleQuestionChange(e) {
    this.setState({ answerBody: e.target.value});
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      answerBody,
    } = this.state;
    const { questionId } = this.props;
    axios.post(`/qa/questions/${questionId}/answers`, {
      body: answerBody,
      name: 'hello',
      email,
      photos: images,
    })
      .then((response) => {
        this.setState({
          questionBody: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      questionBody
    } = this.state;
    const { productName } = this.props;

    return (
      <div className="form question">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <label htmlFor="form-body" id="form-body-label">Your Question: </label>
          <textarea id="form-body" name="body" value={questionBody} onChange={this.handleQuestionChange} maxLength="1000" />
          <br></br>
          <label htmlFor="name" id="name-label">What is your name?: </label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleNameChange} placeholder="Bob Smith" maxLength="50" />
          <br></br>
          <label htmlFor="name" id="name-label">What is your email?: </label>
          <input type="text" id="email" name="name" value={name} onChange={this.handleEmailChange} placeholder="bobsmith1@gmail.com" maxLength="50" />
          <input type="submit" value="Submit" id="a-form-submit" />
        </form>
      </div>
    );
  }
}

export default QuestionForm;