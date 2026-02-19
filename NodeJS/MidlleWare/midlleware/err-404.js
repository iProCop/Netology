const error404 = (req, res, next) => {
    res.status(404).send(`
            <h1>404 - Страница не найдена</h1>
            <a href='/'>Вернуться на главную</a>
        `);
};

module.exports = error404;