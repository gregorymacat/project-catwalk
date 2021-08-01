import React from 'react';
import Questions from './Questions';
import QuestionModal from './QuestionModal';
//import axios from 'axios';
import {getAnswersByQuestionId, getQuestions} from '../../../Controllers/questions-answers.js';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedQuestions: [],
      products: this.props.product,
      questionList: [],
      allQuestions: [],
      query: [],
      queryList: [],
      product_id: this.props.product[0].id,
      repeated: false,
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.state.product_id = '17083'
    if (!this.state.repeated) {
      getQuestions(this.state.product_id, (error, quests) => {
        if (error) { return console.log('Failure to get ID: ', error); }
        var quests1 = quests.results;
        //console.log(quests);
        this.setState({
          questionList: quests1.slice(0,2),
          queryList: quests1,
          allQuestions: quests1,
        })
      });
      this.state.repeated = true;
    }
  }

  handleChange(e) {
    const query = e.target.value;
    const {allQuestions} = this.state;
    if (!allQuestions) {
      return
    }
    let questionList = [];
    let queryList = [];
    this.setState({ query }, () => {
      if (query.length < 3) {
        queryList = allQuestions;
        questionList = queryList.slice(0, 4);
        this.setState({ questionList, queryList });
      } else {
        for (const question of allQuestions) {
          if (question.question_body.toUpperCase().includes(query.toUpperCase())) {
            queryList.push(question);
          }
        }
        questionList = queryList.slice(0, 4);
        this.setState({ questionList, queryList });
      }
    });
  }

  onClick() {
    const { questionList, queryList } = this.state;
    this.setState({
      questionList: queryList.slice(0, questionList.length + 2),
    });
  }

  render() {
    if (this.state.questionList === undefined) {
      const questionList = this.state.savedQuestions
    }

    const { questionList, query, allQuestions, queryList, products } = this.state;

    return (
      <div id="main">
        <div id="qaheading"><h4>Questions and Answers</h4></div>
        <div id="qa"></div>
        <div className="sbar">
        <input className="search" type="text" placeholder="Search for Questions" value={query} onChange={this.handleChange} />
        <img className="search_image" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>
        </div>
        <Questions
          questions={questionList}
          allQuestions={allQuestions}
          product={products}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default QuestionList;