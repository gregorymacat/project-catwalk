var express = require('express');
var router = express.Router();
var {find, add, update} = require('./controllers.js');

// PRODUCTS API
router.get('/api/products', (req, res) => {
  find('/products', (err, data) => {
    if (err) {
      console.log('!!!ERROR: express router \"/routers.js\"');
      return res.end();
    }
    res.send(data);
  });
});
router.get('/api/products/:product_id', (req, res) => {
  find(`/products/${req.params.product_id}/`, (err, data) => {
    if (err) {
      console.log('!!!ERROR: express router \"/routers.js\"');
      return res.end();
    }
    res.send(data);
  });
});
router.get('/api/products/:product_id/styles', (req, res) => {
  find(`/products/${req.params.product_id}/styles`, (err, data) => {
    if (err) {
      console.log('!!!ERROR: express router \"/routers.js\"');
      return res.end();
    }
    res.send(data);
  });
});
router.get('/api/products/:product_id/related', (req, res) => {
  res.send();
});
// REVIEWS API
router.get('/api/reviews', (req, res) => {
  res.send();
});
router.get('/api/reviews/meta', (req, res) => {
  res.send();
});
router.post('/api/reviews', (req, res) => {
  res.send();
});
router.put('/api/reviews/:review_id/helpful', (req, res) => {
  res.send();
});
router.put('/api/reviews/:review_id/report', (req, res) => {
  res.send();
});
// QA API
router.get('/qa/questions', (req, res) => {
  res.send();
});
router.get('/qa/questions/:question_id/answers', (req, res) => {
  res.send();
});
router.post('/qa/questions', (req, res) => {
  res.send();
});
router.post('/qa/questions/:question_id/answers', (req, res) => {
  res.send();
});
router.put('/qa/questions/:question_id/helpful', (req, res) => {
  res.send();
});
router.put('/qa/questions/:question_id/report', (req, res) => {
  res.send();
});
router.put('/qa/answers/:answer_id/helpful', (req, res) => {
  res.send();
});
router.put('/qa/answers/:answer_id/report', (req, res) => {
  res.send();
});
// CART API
router.get('/api/cart', (req, res) => {
  res.send();
});
router.post('/api/cart', (req, res) => {
  res.send();
});
// INTERACTIONS API
router.post('/api/interactions', (req, res) => {
  res.send();
});

module.exports = router;