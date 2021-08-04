import React from 'react';

class QuestionModal extends React.Component {
  render() {
    const { submit, children } = this.props;

    return (
      <React.Fragment>

      <div className="modal">
        <div className="modal-content">
          <button className="questionModal close" onClick={submit}>&times;</button>
          {children}
        </div>
      </div>
      </React.Fragment>

    );
  }
}

export default QuestionModal;