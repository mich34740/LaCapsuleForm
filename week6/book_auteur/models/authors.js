const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: {type: String, required: [true, 'Veuillez saisir le nom!!'], trim: true},
	bio: {type: String},
    website: {type: String},    
});

const Author = mongoose.model('authors', authorSchema);

module.exports = Author;