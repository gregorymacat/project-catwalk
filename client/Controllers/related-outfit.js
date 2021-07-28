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
    //console.log('This is the array ', idArray);
    if (!Array.isArray(idArray) || idArray.length === 0) {
      return callback('!!!ERROR: Unable to process invalid array.');
    }

    var requests = idArray.map((id) => {
      return axios.get('/products/' + id);
    })

    //console.log('Sending requests ', requests);
    Promise.all(requests)
      .then((responses) => {
        // console.log('Responses received by IDs ', responses);
        callback(null, responses);
      })
      .catch((err) => {
        console.log('!!!ERROR retrieving related products from API');
        throw err;
        callback(err)
      });
  }
}