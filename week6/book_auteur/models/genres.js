const { default: mongoose } = require("mongoose");

const genreSchema = mongoose.Schema({
    name: {type: String, required: [true, 'Veuillez saisir le genre!!'], trim: true},
    description: {type: String, }
});

const Genre = mongoose.model('genres', genreSchema);

module.exports = Genre;