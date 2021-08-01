var axios = require('axios');

module.exports = {
  getAllReviews: (req, callback) => {
    axios.get('/reviews/?page=1&count=5&sort=newest&product_id=19093')
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  },

  getAllMetaReviews: (req, callback) => {
    axios.get(`http://localhost:8080/reviews/meta/?product_id=${req}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  }
};