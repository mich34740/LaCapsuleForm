var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/", async (req, res) => {
  try {
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    const users = data.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
    }));

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


module.exports = router;
