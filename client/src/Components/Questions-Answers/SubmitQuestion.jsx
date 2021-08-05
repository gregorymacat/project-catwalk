import React from 'react';
import axios from 'axios';

class SubmitQuestion extends React.Component {
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
    axios.post(`/qa/questions/${questionId}`, {
      body: answerBody,
      name: name,
      email: email,
    })
      .then((response) => {
        this.setState({
          answerBody: '',
          nickname: '',
          email: '',
        });
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    var {
      answerBody, name, email
    } = this.state;
    var {product_name} = this.props;
    var { productName } = this.props;
    var subtitle = 'About the ' + product_name;
    return (
      <div className="form question">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <div className="title-question" id="title-question">Ask Your Question</div>
          <div className="subtitle" id="subtitle">{subtitle}</div>
          <label htmlFor="form-body" id="form-body-label">Your Question: </label>
          <textarea id="form-body" name="body" value={answerBody} onChange={this.handleQuestionChange} maxLength="1000" />
          <br></br>
          <label htmlFor="name" id="name-label">What is your name?: </label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleNameChange} placeholder="Example: jackson11!" maxLength="50" />
          <br></br>
          <span id='name-warning'>For privacy reasons, please do not use your full name or email address</span>
          <br></br>
          <label htmlFor="name" id="name-label">What is your email?: </label>
          <input type="text" id="email" name="name" value={email} onChange={this.handleEmailChange} placeholder="Why did you like the product or not?" maxLength="60" />
          <br></br>
          <label htmlFor="auth" id="auth">For authentication reasons, you will not be emailed</label>
          <br></br>
          <input type="submit" value="Submit" id="a-form-submit" />
        </form>
      </div>
    );
  }
}

export default SubmitQuestion;