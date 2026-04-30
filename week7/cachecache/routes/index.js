var express = require('express');
var router = express.Router();

let cache = {};

function setCache(url, data) {
  cache[url] = {
    data,
    timestamp: Date.now()
  };
}


function fetchWithCache(url) {
  const entry = cache[url];
  if (!entry) return null;

  const maxAge = 600000; // 10 min
  if (Date.now() - entry.timestamp > maxAge) {
    delete cache[url];
    return null;
  }

  return entry.data;
}

/* GET home page. */
router.get('/api/posts/', function(req, res, next) {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  // Vérifier si la réponse est dans le cache
  const cachedData = fetchWithCache(url);
  if (cachedData) {
    console.log("cache");
    return res.json(cachedData);
  }
  
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => res.json())
  .then(data => {
     // Stocker la réponse dans le cache
     setCache(url, data)
     res.json(data);
   })  

.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});

 

router.get('/api/posts/:postId/comments', function(req, res, next) {
  const url = 'https://jsonplaceholder.typicode.com/posts/${:postId}/comments';

  // Vérifier si la réponse est dans le cache
  const cachedData = fetchWithCache(url);
  if (cachedData) {
    console.log("cache");
    return res.json(cachedData);
  }
  
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => res.json())
  .then(data => {
     // Stocker la réponse dans le cache
     setCache(url, data)
     res.json(data);
   })  

.catch(err => {
      res.status(500).json({
        result: false,
        error: "API error"
      });
    });
});
module.exports = router;
