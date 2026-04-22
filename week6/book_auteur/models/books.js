const { default: mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({
    reviewer: {type: String},
    text: {type: String},
    rating: {type: Number},
});

const bookSchema = mongoose.Schema({
    title: {type: String, required: [true, 'Veuillez saisir le titre!!'], trim: true},
    summary: {type: String},
    isbn: {type: Number},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors'},    
    genres: [{type: mongoose.Schema.Types.ObjectId, ref: 'genres'}],
    reviews: [reviewSchema]
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;