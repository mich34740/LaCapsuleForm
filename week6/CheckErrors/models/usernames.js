const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
 username: { type: String, required: true },
 age: { type: Number, required: true, min: 0 },
 //email: { type: String, unique: true },
 email: { type: String },
});
userSchema.index({username: 1, age: 1});
const Username = mongoose.model('usernames', userSchema);

module.exports = Username;