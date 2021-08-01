import React from 'react';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      name: '',
      email: '',
      answer: ''
    }
  }
  render() {
    return (
        <div>
          <p>Answer Modal</p>
        </div>
    )
  }
}

export default AnswerModal;