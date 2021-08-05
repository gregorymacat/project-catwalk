import React from 'react';

class QuestionModal extends React.Component {
  render() {
    const { submit, children } = this.props;

    return (

      <div className="questionMod">
        <div className="questionPopout">
          <button className="questionModalClose" onClick={submit}>&times;</button>
          {children}
        </div>
      </div>

    );
  }
}

export default QuestionModal;