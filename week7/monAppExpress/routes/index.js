var express = require('express');
var router = express.Router();

const { getPosts } = require('../utils/apiHandler');

/* GET home page. */
router.get('/posts', async function (req, res, next) {
   try {
    const data = await getPosts();

    res.status(200).json({
      result: true,
      posts: data,
    });

  } catch (error) {
    res.status(500).json({
      result: false,
      error: 'API error',
    });
  }
});

module.exports = router;
