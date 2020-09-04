var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/karakter/:karakter', function (req, res, next) {
  next()
}, function (req, res, next) {
  var x = req.params.karakter;
var split = x.split("");
var d = x.length;
var hasil1 = "";
var hasil2 = "";
  for (var i = 0; i <= d-1; i++) {
    if (split[i].match(/[a-z]/i)) {
        hasil1 = split[i];
      }else{
           hasil1 = "";
             }
    
      hasil2 = hasil2+hasil1;
      }
  res.send(hasil2);
})

module.exports = router;
