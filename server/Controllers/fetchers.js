var axios = require('axios');
const {url, API_KEY} = require('../../config.js');

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
        console.log('!!!ERROR: axios get: \"/controllers.js find()\" ', err.message);
        callback(err);
      });
  },

  add: function(route, data, callback){
    axios.post(url + route, data, options)
      .then((response) => {
        console.log('Added data successfully');
        callback(null);
      })
      .catch((err) => {
        console.log('!!!ERROR: axios post: \"/controllers.js add()\"');
        callback(err);
      });
  },

  update: function(route, data, callback){
    axios.put(url + route, data, options)
      .then((response) => {
        console.log('Updated data successfully');
        callback(null);
      })
      .catch((err) => {
        console.log('!!!ERROR: axios post: \"/controllers.js update()\" ', err.message);
        callback(err);
      });
  }
}