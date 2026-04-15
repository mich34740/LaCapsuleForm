// On ne touche pas à ce fichier 😉

const mongoose = require('mongoose');
const connectionString = require('../connection');

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

const userSchema = mongoose.Schema({
	name: String,
	email: String,
	age : Number,
	lastActive: Date,
	interestTags: [String],
	dailyActivityLogs : Number,
	isActive : Boolean,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
