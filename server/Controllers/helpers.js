var {find, add, update} = require('./fetchers.js');

module.exports = {
  findToDo: function (req, res) {
    find(req.url, (err, data) => {
      if (err) {
        console.log('!!!ERROR: express router \"/routers.js\" (get)');
        return res.end();
      }
      res.send(data);
    });
  },

  addToDo: function (req, res) {
    add(req.url, req.body, (err) => {
      if (err) {
        console.log('!!!ERROR: express router \"/routers.js\" (post)');
        return res.end();
      }
      res.send('Success');
    });
  },

  updateToDo: function (req, res) {
    update(req.url, req.body, (err, data) => {
      if (err) {
        console.log('!!!ERROR: express router \"/routers.js\" (put)');
        return res.end();
      }
      res.send('Success');
    })
  }
}
