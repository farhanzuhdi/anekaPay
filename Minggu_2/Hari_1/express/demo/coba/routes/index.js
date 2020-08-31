var express = require('express');
const { path } = require('../app');
var router = express.Router();
var view = __dirname;
var pat = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cal', function (req, res) {
  res.render('cal')
})
router.get('/logo', function (req, res) {
  res.render('logo')
})
router.get('/halo', function (req, res) {
  res.send('halo')
})
router.get('/kal', function (req, res) {
  res.sendFile(pat.join(view + "/calcu.html"))
})
router.get('/kalkulator', function (req, res) {
  res.render('kal')
})

module.exports = router;
