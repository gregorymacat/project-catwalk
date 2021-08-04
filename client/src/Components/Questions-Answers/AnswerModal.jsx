import React from 'react';

class AnswerModal extends React.Component {
  render() {
    const { submit, children } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <button className="answerModal close" onClick={submit}>&times;</button>
          {children}
        </div>
      </div>
    );
  }
}

export default AnswerModal;