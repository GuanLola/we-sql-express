let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let users = require('../controller/users');

let urlEncodedParser = bodyParser.urlencoded({ extended: true });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource!!!');
});

// register
router.post('/register', urlEncodedParser, (req, res, next) => {
  console.log('req.body==>', req.body)
  let result = users.register(req.body)
  result.then(data => {
    if (data.id) {
      res.send({
        code: 200,
        msg: 'register success',
        data: data
      })
    } else {
      res.send({
        code: 400,
        msg: 'register fail'
      })
    }
  })
});

module.exports = router;
