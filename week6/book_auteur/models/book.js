const { default: mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({
    reviewer: {type: String},
    test: {type: String},
    rating: {type: Number}
});

const bookSchema = mongoose.Schema({
    title: {type: String, required: [true, 'Veuillez saisir le titre!!'], trim: true},
    summary: {type: String},
    isbn: {type: Number},
    author: {type: mongoose.Schema.type.ObjetId, ref: 'authors'},    
    genres: [{type: mongoose.Schema.type.ObjetId, ref: 'genres'}],
    reviews: [reviewSchema]
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;