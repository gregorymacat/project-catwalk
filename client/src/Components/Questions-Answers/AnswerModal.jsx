import React from 'react';

class AnswerModal extends React.Component {
  render() {
    const { submit, children } = this.props;
    return (
      <div className="answerMod">
        <div className="answerPopout">
          <button className="answerModalClose" onClick={submit}>X</button>
          {children}
        </div>
      </div>
    );
  }
}

export default AnswerModal;