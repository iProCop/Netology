const express = require('express');
const logger = require('./logger');
const error404 = require('./err-404');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactsRouter = require('./routes/contacts');

const app = express();

app.use(logger);
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contacts', contactsRouter);

app.use(error404)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});