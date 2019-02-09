var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/name', function(req, res, next){
  var person = {
    name: 'Ted',
    age: 900,
    country: 'Ghana',
    hometown: 'Accra'
  };
var visitor = req.query;
 
res.render('Name', {
    title:'About me',
    me: person,
    visitor,
  });
router.get('/register', function(req, res, next){
  res.render('signup', {title:'Create Your Account'})
});
router.post('/create-account', function(req, res, next){
  res.render('details',)
    title: 'WELCOME!!!',
    user: req.body
  });
});

module.exports = router;
