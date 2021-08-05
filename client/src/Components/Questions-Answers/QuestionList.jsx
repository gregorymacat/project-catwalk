import React from 'react';
import Questions from './Questions';
import QuestionModal from './QuestionModal';
import axios from 'axios';
import {getAnswersByQuestionId, getQuestions} from '../../../Controllers/questions-answers.js';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.product)
    this.state = {
      savedQuestions: [],
      products: this.props.product,
      questionList: [],
      allQuestions: [],
      query: [],
      queryList: [],
      product_id: this.props.product,
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //console.log(this.props.productName);
    //this.state.product_id = '17068'
    //this.state.product_id = this.props.product;
      getQuestions(this.state.product_id, (error, quests) => {
        if (error) { return console.log('Failure to get ID: ', error); }
        var quests1 = quests.results;
        if (quests1) {
        this.setState({
          questionList: quests1.slice(0,2),
          queryList: quests1,
          allQuestions: quests1,
        }) }
      });
    //}
  }


  componentDidUpdate(prevProps) {

    if (prevProps.product !== this.props.product) {
      this.state.product_id = this.props.product;
      getQuestions(this.props.product, (error, quests) => {
        if (error) { return console.log('Failure to get ID: ', error); }
        var quests1 = quests.results;
        if (quests1) {
          this.setState({
            questionList: quests1.slice(0,2),
            queryList: quests1,
            allQuestions: quests1,
          })
        }
      });
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
        for (const x of allQuestions) {
          if (x.question_body.toUpperCase().includes(query.toUpperCase())) {
            queryList.push(x);
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
    //console.log('hello')
    //console.log(this.props.product);
    if (this.state.questionList === undefined) {
      const questionList = this.state.savedQuestions
    }

    const { questionList, query, allQuestions, queryList, products } = this.state;

    return (
      <div id="main" onClick={(e) => {this.props.handleInteraction(e, 'qa')}}>
        <div id="qaheading"><h1>Questions and Answers</h1></div>
        <div id="qa"></div>
        <div className="sbar">
        <input className="search" type="text" placeholder="Search for Questions" value={query} onChange={this.handleChange} />
        <img className="simage" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>
        </div>
        <Questions
          questions={questionList}
          allQuestions={allQuestions}
          product={products}
          onClick={this.onClick}
          product_name={this.props.prodName}
        />
      </div>
    );
  }
}

export default QuestionList;