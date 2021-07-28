var axios = require('axios');

module.exports = {
  getProducts: function(callback) {
    axios.get('/products')
      .then((response) => {
        callback(response.data);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving data from API');
        throw err;
      });
  }
}