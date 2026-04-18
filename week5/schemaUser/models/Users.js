const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: [true, 'Veuillez saisir le nom!!'], trim: true},
	email: {type: String, required: true, unique: true, lowercase: true, trim: true, validate: {validator: function(value) {
		     return /\S+@\S+\.\S+/.test(value);}, message: 'Veuillez saisir un email valide!!'}},
    age: {type: Number, required: true, min: 13, max: 120},             
    createdAt: {type: Date, default: Date.now },             
    interestTags: {type: [String], set: arr => arr.map(t => t.toLowerCase()), validate: {validator: function(arr) {return arr.length<=5;}, message: "Maximun 5 tags autorisés"}},             
    isActive: {type: Boolean, default: true},
    bio: {type: String, validate: {validator: function(value) {
		     return (!value || value.length<=1000);}, message: 'La bio ne doit pas dépasser 1000 caractères!!'}},
    rue: {type: String},
    codePostal: {type: Number, min: 10000, max: 99999},
    ville: {type: String} 
});
userSchema.pre('validate', function() {
  const { rue, codePostal, ville } = this;

  const oneFilled = !!(rue || codePostal || ville);

  if (oneFilled) {
    if (!rue) this.invalidate('rue', "La rue est obligatoire si une adresse est renseignée");
    if (!codePostal) this.invalidate('codePostal', "Le code postal est obligatoire si une adresse est renseignée");
    if (!ville) this.invalidate('ville', "La ville est obligatoire si une adresse est renseignée");
  }

});
const User = mongoose.model('users', userSchema);

module.exports = User;