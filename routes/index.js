var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Request URL: http://localhost:3000/users/34/books/8989
router.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
});


router.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

/// joining next functions will end up with last one's response on page
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

router.get('/example/c', [cb0, cb1, cb2])
/////


router.route('/book')
.get(function (req, res) {
  res.send('Get a random book')
})
.post(function (req, res) {
  res.send('Add a book')
})
.put(function (req, res) {
  res.send('Update the book')
})

module.exports = router;
