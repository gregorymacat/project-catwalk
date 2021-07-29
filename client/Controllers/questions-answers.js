var axios = require('axios');

module.exports = {
//GET REQUESTS
  getAnswersByQuestionId: function(id, callback) {
    axios.get('/qa/questions/' + id + '/answers')
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        console.log('error in getting question answers by ID');
        throw error;
        return callback(error);
      });
  },

//POST REQUEST
  postAnswersByQuestionId: function(id, callback) {
    axios.post('/qa/questions/' + id + '/answers')
  },

//PUT REQUESTS
  reportQuestionsById: function(id, callback) {
    axios.put('/qa/questions/' + id + '/report')
  },

  reportAnswersById: function(id, callback) {
    axios.put('/qa/answers/' + id + '/report')
  },

  putHelpfulQuestionsById: function(id, callback) {
    axios.put('/qa/questions/' + id + '/helpful')
  },

  putHelpfulAnswersById: function(id, callback) {
    axios.put('/qa/answers/' + id + '/helpful')
  },

}