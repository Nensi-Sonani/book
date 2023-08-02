const mongoose = require('mongoose');
let bookSchema = new mongoose.Schema({
    bookname: { type: String, required: true },
    authorname: String,
    price: Number
});

let Book = mongoose.model('Book', bookSchema);
module.exports = Book;