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
      // putHelpfulAnswersById(answer.id, (error, quests) => {
      //   if (error) { return console.log('Failure to get ID: ', error); }
      //   var quests1 = quests.results;
      //   //console.log(quests);
      //   console.log("called helpful");
      //   this.setState({
      //     helpfulStatus: true
      //   })
      // });
    }
  }

  callReport() {
    const { reportedStatus } = this.state;
    const { answer } = this.props;
    if (!reportedStatus) {
      this.reportedStatus = true;
        //AXIOS PUT REQUEST FOR REPORT
    }
  }

  render() {
    const { answer } = this.props;
    const { helpfulStatus, reportedStatus } = this.state;

    let answerer = answer.answerer_name;
    let seller;
    if (answerer === seller) {
      answerer = Seller;
    }
    let time = new Date(answer.date).toISOString().slice(0, 10);

    //const answerTag = `by ${answerer}, ${time} | Helpful? `;

    return (
      <div>
        <div>{answer.body}</div>
          <span><font size="1">{`by ${answerer}, ${time} | Helpful? `} </font></span>
          <button onClick={this.callHelpful}>Yes</button>
          <span> <font size="1">
            {helpfulStatus ? ` (${answer.helpfulness + 1}) ` : ` (${answer.helpfulness}) `} </font>
          </span>
          {reportedStatus ? <span className="report">Reported</span> : <button onClick={this.callReport}>Report</button>}
      </div>
    );
  }
}

export default Answer;