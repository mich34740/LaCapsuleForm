const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
 username: { type: String, required: true },
 age: { type: Number, required: true, min: 0 },
 email: { type: String, unique: true },
});

const Username = mongoose.model('usernames', userSchema);

module.exports = Username;