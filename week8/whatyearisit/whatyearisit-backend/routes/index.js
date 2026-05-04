var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res, next) {
  res.json({ year: '2050' });
});

module.exports = router;
