import React from 'react';
import axios from 'axios';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      name: '',
      email: ''
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
      name,
      email
    } = this.state;
    const { questionId } = this.props;
    axios.post(`/qa/questions/${questionId}/answers`, {
      body: answerBody,
      name: name,
      email: email
    })
      .then((response) => {
        this.setState({
          answerBody: '',
          nickname: '',
          email: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      answerBody, name, email
    } = this.state;
    const { productName, questionBody } = this.props;

    return (
      <div className="form answer">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <label htmlFor="form-body" id="form-body-label">Your Answer: </label>
          <textarea id="form-body" name="body" value={answerBody} onChange={this.handleQuestionChange} maxLength="1000" />
          <br></br>
          <label htmlFor="name" id="name-label">What is your name?: </label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleNameChange} placeholder="Example: jack543!" maxLength="60" />
          <br></br>
          <label htmlFor="name" id="name-label">What is your email?: </label>
          <input type="text" id="email" name="name" value={email} onChange={this.handleEmailChange} placeholder="Example: jack@email.com" maxLength="60" />

          <input type="submit" value="Submit" id="a-form-submit" />
        </form>
      </div>
    );
  }
}

export default AnswerForm;