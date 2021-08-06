import React from 'react';
import axios from 'axios';

class SubmitAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      name: '',
      email: '',
      image: '',
      picsArray: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);

  }

  handleQuestionChange(e) {
    this.setState({ answerBody: e.target.value});
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value});
  }
  handlePictureChange(e) {
    const { picsArray } = this.state;
    const pic = e.target.files[0];
    if (pic) {
      picsArray.push(URL.createObjectURL(pic));
      this.setState({ picsArray,});
    }
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    const {
      answerBody,
      name,
      picsArray,
      email
    } = this.state;
    const { questionId, product_name } = this.props;
    axios.post(`/qa/questions/${questionId}/answers`, {
      body: answerBody,
      name: name,
      email,
      photos: picsArray,
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
      answerBody, name, picsArray, image, email
    } = this.state;
    var k = 0;
    var { productName, questionBody, product_name } = this.props;
    var subtitle = product_name + ' : ' + questionBody;
    return (
      <div className="new answers">
        <form className="submission" onSubmit={this.handleSubmit}>
          <div className="title-answers" id="title-answers">Submit Your Answers</div>
          <div className="subtitle" id="subtitle">{subtitle}</div>
          <hr></hr>
          <label htmlFor="text-body" id="textbody"><b>Your Answer: </b></label>
          <textarea id="text-body" name="text_body" value={answerBody} onChange={this.handleQuestionChange} maxLength="1000" />
          <hr></hr>

          <br></br>
          <label htmlFor="name" id="naming"><b>What is your name?: </b></label>
          <input type="text" id="name-answer" name="name" value={name} onChange={this.handleNameChange} placeholder="Example: jack543!" maxLength="60" />
          <br></br>
          <label id="name-warning">For privacy reasons, please do not use your full name or email address</label>
          <hr></hr>

          <br></br>

          <label htmlFor="email-id" id="email-id"><b>What is your email?:</b> </label>
          <input type="text" id="email" name="email-id" value={email} onChange={this.handleEmailChange} placeholder="Example: jack@email.com" maxLength="60" />

          <br></br>
          <label htmlFor="auth" id="auth">For authentication reasons, you will not be emailed</label>
          <hr></hr>

          <br></br>
          <label htmlFor="pic-id" id="pic-id"><b>Upload Photos:</b></label>
          <br></br>
          {picsArray.length < 5 && <input type="file" accept="image/*" id="pics-button" onChange={this.handlePictureChange} />}
          <br></br>
          <hr></hr>
          <br></br>

          <div className="modalButton" id="modalButton"><input type="submit" value="Submit" className="answerModeSubmit" id="a-form-submit" /></div>
        </form>
      </div>
    );
  }
}

export default SubmitAnswer;