const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Mini Message board' });
});

router.post('/new', function(req, res, next) {
  messages.push({user: req.body.user, text:req.body.text, added: new Date()})
  res.redirect('/');
});

module.exports = router;
