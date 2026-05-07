var express = require('express');
var router = express.Router();
const checkApiKey = require('../middlewares/checkApiKey');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather/:city', checkApiKey, function (req, res) {  
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&x-api-key=${process.env.OPENWEATHER_API_KEY}&units=metric`)
				.then(response => response.json())
				.then(Data => {
					res.status(200).json({result: true, city: Data,});
  });
});      

router.get('/weather/forecast/:city', checkApiKey, function (req, res) {  
  if (!req.params.city) { return res.json({result: false, error: "aucune ville"})};
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&x-api-key=${process.env.OPENWEATHER_API_KEY}&units=metric`)
				.then(response => response.json())
				.then(Data => {
					res.status(200).json({result: true, city: Data,});
  });
});      

module.exports = router;
