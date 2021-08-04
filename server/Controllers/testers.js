var axios = require('axios');
const testUrl = 'http://localhost:8080/';
const {url, API_KEY} = require('../../config.js');

var testGet = function(route, callback){
  axios.get(testUrl)
    .then((response) => {
      console.log('Tested get request successfully');
      callback(null, response.data);
    })
    .catch((err) => {
      console.log('!!!ERROR: axios test get: \"/testers.js\" ', err.message);
      callback(err);
    });
}

module.exports = {
  testingToDo: function(req, res){
    testGet(req.url, (err, data) => {
      if (err) {
        console.log('!!!ERROR: axios test get: \"/testers.js\" ');
        return res.status(400).send('Failure');
      }
      res.status(200).send('Success');
    });
  }
}