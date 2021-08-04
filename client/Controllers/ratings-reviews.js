var axios = require('axios');

module.exports = {
  getAllReviews: (req, callback) => {
    axios.get(`/reviews/?page=1&count=5&sort=${req.sort}&product_id=${req.productID}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  getAllMetaReviews: (req, callback) => {
    axios.get(`/reviews/meta/?product_id=${req}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  postAReview: (req, callback) => {
    axios.post(`/reviews`, req)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },
};