var axios = require('axios');

module.exports = {
  getRelatedProductIds: function(id, callback) {
    axios.get('/products/' + id + '/related')
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving related product IDs from API');
        throw err;
        return callback(err);
      });
  },

  getProductsByIds: function(idArray, callback) {
    if (!Array.isArray(idArray) || idArray.length === 0) {
      return callback('!!!ERROR: Unable to process invalid array.');
    }
    var requests = idArray.map((id) => {
      return axios.get('/products/' + id);
    })
    Promise.all(requests)
      .then((responses) => {
        callback(null, responses);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving related products from API');
        throw err;
        callback(err)
      });
  },

  getStylesByIds: function(idArray, callback) {
    if (!Array.isArray(idArray) || idArray.length === 0) {
      return callback('!!!ERROR: Unable to process invalid array.');
    }
    var requests = idArray.map((id) => {
      return axios.get('/products/' + id + '/styles');
    })
    Promise.all(requests)
      .then((responses) => {
        callback(null, responses);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving styles from API');
        throw err;
        callback(err)
      });
  },

  getMetadataByIds: function(idArray, callback) {
    if (!Array.isArray(idArray) || idArray.length === 0) {
      return callback('!!!ERROR: Unable to process invalid array.');
    }

    var requests = idArray.map((id) => {
      return axios.get(`http://localhost:3000/reviews/meta/?product_id=` + id)
    });
    Promise.all(requests)
      .then((responses) => {
        callback(null, responses);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving rating metadata from API');
        throw err;
        callback(err)
      });
  },
}