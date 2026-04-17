const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true, validate: {validator: function(value) {
		     return (value!=null && value.length > 0);}, message: 'Veuillez saisir le nom!!'}},
	email: {type: String, required: true, unique: true, lowercase: true, trim: true, validate: {validator: function(value) {
		     return /\S+@\S+\.\S+/.test(value);}, message: 'Veuillez saisir un email valide!!'}},
    age: {type: Number, required: true, min: 13, max: 120},             
    createdAt: {type: Date, default: Date.now },             
    interestTags: {type: [String], lowercase: true},             
    isActive: {type: Boolean, default: true},
    bio: {type: String, validate: {validator: function(value) {
		     return (value.length<=1000);}, message: 'La bio ne doit pas dépasser 1000 caractères!!'}}

});

const User = mongoose.model('users', userSchema);

module.exports = User;