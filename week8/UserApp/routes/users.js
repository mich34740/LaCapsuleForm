var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(dbData => {res.json({users: dbData})})
             .catch(err => {res.status(500).json({ result: false, error: err.message });
})  
});

router.post('/', (req, res) => {
	const testBody = ["username","age","email"];
	if (!checkBody(req.body,testBody)) {
    	return res.json({ result: false, error: "Missing or empty fields" });
  	}
	// Check if the user has not already been added
	User.findOne({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(dbData => {
		if (dbData === null) {
			// Creates new user
			const newUser = new User({
				username: req.body.name,
				email: req.body.email,
				age: req.body.age,
			});

			// Finally save in database
			newUser.save().then(User => {
				res.json({ result: true });
			});
		} else {
			// user already exists in database
			res.json({ result: false, error: 'User already exists' });
		}
    });
});
module.exports = router;
