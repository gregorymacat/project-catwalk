import React from 'react';
import axios from 'axios';
import {reportAnswersById, putHelpfulAnswersById} from '../../../Controllers/questions-answers.js';

class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      helpfulStatus: false,
      reportedStatus: false,
    }
    this.callHelpful = this.callHelpful.bind(this);
    this.callReport = this.callReport.bind(this);
  }

  callHelpful() {
    const {helpfulStatus} = this.state;
    const {answer} = this.props;
    if (!helpfulStatus) {
      axios.put(`/qa/answers/${answer.id}/helpful`)
        .then((res) => {
          this.setState({ helpfulStatus: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  callReport() {
    const { reportedStatus } = this.state;
    const { answer } = this.props;
    if (!reportedStatus) {
      axios.put(`/qa/answers/${answer.id}/report`)
        .then((res) => {
          this.setState({ reportedStatus: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { answer } = this.props;
    const { helpfulStatus, reportedStatus } = this.state;
    var pics = null;
    var time = new Date(answer.date).toLocaleDateString();
    if (answer.photos.length > 0) {
      var i = 0;
      pics = answer.photos.map((x) => (
        <div key={i++}>
          <img className="photos-qa" src={x} alt="" />
        </div>
      ));
    }

    var seller;
    var poster = answer.answerer_name;
    if (poster === seller) {
      poster = Seller;
    }

    return (
      <div>
        <div>{answer.body}</div>
        <div className="photos-qa">
          {pics}
        </div>
          <span><font size="1">{`by ${poster}, ${time} | Helpful? `} </font></span>
          <button className="qa-button-small" onClick={this.callHelpful}>Yes</button>
          <span> <font size="1">
            {helpfulStatus ? ` (${answer.helpfulness + 1}) ` : ` (${answer.helpfulness}) `} </font>
          </span>
          {reportedStatus ? <span className="report">Reported</span> : <button className="qa-button-small reported" onClick={this.callReport}>Report</button>}
      </div>
    );
  }
}

export default Answer;