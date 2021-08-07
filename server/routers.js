var express = require('express');
var router = express.Router();
var {findToDo, addToDo, updateToDo} = require('./Controllers/helpers.js');
var {testGetToDo} = require('./Controllers/testers.js');

// TESTING
router.get('/testing', testGetToDo);

// PRODUCTS API
router.get('/products', findToDo);
router.get('/products/:product_id', findToDo);
router.get('/products/:product_id/styles', findToDo);
router.get('/products/:product_id/related', findToDo);

// REVIEWS API
router.get('/reviews', findToDo);
router.get('/reviews/meta', findToDo);
router.post('/reviews', addToDo);
router.put('/reviews/:review_id/helpful', updateToDo);
router.put('/reviews/:review_id/report', updateToDo);

// QA API
router.get('/qa/questions', findToDo);
router.get('/qa/questions/:question_id/answers', findToDo);
router.post('/qa/questions', addToDo);
router.post('/qa/questions/:question_id/answers', addToDo);
router.put('/qa/questions/:question_id/helpful', updateToDo);
router.put('/qa/questions/:question_id/report', updateToDo);
router.put('/qa/answers/:answer_id/helpful', updateToDo);
router.put('/qa/answers/:answer_id/report', updateToDo);

// CART API
router.get('/cart', findToDo);
router.post('/cart', addToDo);

// INTERACTIONS API
router.post('/interactions', addToDo);

module.exports = router;