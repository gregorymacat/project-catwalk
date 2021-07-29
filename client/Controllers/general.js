var axios = require('axios');

module.exports = {
  getAllProducts: function(callback) {
    axios.get('/products')
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving all products from API');
        throw err;
        return callback(err);
      });
  },
  getOneProduct: function(id, callback) {
    axios.get('/products/' + id)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving a product from API');
        throw err;
        return callback(err);
      });
  },
}