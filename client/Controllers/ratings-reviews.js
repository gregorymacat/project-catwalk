var axios = require('axios');

module.exports = {
  getAll: (req, callback) => {
    axios.get('/reviews/?page=1&count=5&sort=newest&product_id=19093')
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
  }
};