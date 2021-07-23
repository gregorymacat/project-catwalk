var axios = require('axios');
const {url, API_KEY} = require('../config.js');

const options = {
  headers: {
    Authorization: API_KEY
  }
}

module.exports = {
  find: function(route, callback){
    axios.get(url + route, options)
    .then((response) => {
      console.log('Retrieved data successfully');
      callback(null, response.data);
    })
    .catch((err) => {
      console.log('!!!ERROR: axios get: \"/controllers.js find()\"');
      callback(err);
    });
  },
  add: function(route){

  },
  update: function(route){

  }
}