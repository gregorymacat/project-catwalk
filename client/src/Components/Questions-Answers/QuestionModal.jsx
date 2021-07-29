import React from 'react';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      question: ''
    }
  }
  render() {
    return (
        <div>
          <p>QuestionModal</p>
        </div>
    )
  }
}

export default QuestionModal;