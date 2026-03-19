const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
        required: true
    },

    favorite: {
        type: String,
        required: true
    },

    fileCover: {
        type: String,
        required: true
    },

    fileName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;