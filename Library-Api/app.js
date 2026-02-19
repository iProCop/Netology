const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json());

let books = [];
let nextId = 1;

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    
    if (!book) {
        return res.status(404).json({ error: 'Книга не найдена' });
    }

    res.json(book);
});

app.post('/api/books', (req, res) => {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
  
    const newBook = {
      id: String(nextId++),
      title: title || '',
      description: description || '',
      authors: authors || '',
      favorite: favorite || '',
      fileCover: fileCover || '',
      fileName: fileName || ''
    };
  
    books.push(newBook);
    
    res.status(201).json(newBook);
  });

app.put('/api/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === req.params.id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: "Книга не найдена" });
    }

    const updateBook = {
        ...books[bookIndex],
        ...req.body,
        id: books[bookIndex].id
    }

    books[bookIndex] = updateBook;
    res.json(updateBook);
});

app.delete('/api/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === req.params.id);

    if (bookIndex === -1) {
        return res.status(404).json({ error: "Книга не найдена" });
    }

    books.splice(bookIndex, 1);
    res.send('Ok');
});

app.get('/api/user/login', (req, res) => {
    res.json({ id: 1, mail: "test@mail.ru" });
});

app.post('/api/user/login', (req, res) => {
    res.status(201).json({ id: 1, mail: "test@mail.ru" });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});