const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books)
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Книга не найдена' });
        }

        res.status(200).json(book);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Книга не найдена' });
        }
        res.status(500).json({ message: error.message });
    }
};

const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(200).json(newBook)
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
};

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: `Книга не найдена!` })
        }

        res.status(200).json(updatedBook);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: `Книга не найдена!`});
        }
        res.status(400).json({ message: error.message});
    }
};
const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if(!deletedBook) {
            return res.status(404).json({ message: `Книга не найдена!`});
        }

        res.status(200).send('Ok');
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: `Книга не найдена`});
        }
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};