var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  console.log('ID:'+req.params.id)
  res.send('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/:id', function (req, res, next) {
  console.log('ID:'+req.params.id)
  res.send('special')
})

module.exports = router;
