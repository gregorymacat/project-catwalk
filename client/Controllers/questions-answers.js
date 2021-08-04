var axios = require('axios');

module.exports = {
//GET REQUESTS
  getQuestions: function(req, callback) {
    axios.get('/qa/questions/?page=1&count=200&sort=newest&product_id=' + req)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        console.log('error in getting questions');
        throw error;
        return callback(error);
      });
  },

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
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  postQuestion: function(req, callback) {
    axios.post('/qa/questions', req)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

//PUT REQUESTS
  reportQuestionsById: function(id, callback) {
    axios.put('/qa/questions/' + id + '/report')
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  reportAnswersById: function(id, callback) {
    axios.put('/qa/answers/' + id + '/report')
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  putHelpfulQuestionsById: function(id, callback) {
    axios.put('/qa/questions/' + id + '/helpful')
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  putHelpfulAnswersById: function(id, callback) {
    axios.put('/qa/answers/' + id + '/helpful')
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

}