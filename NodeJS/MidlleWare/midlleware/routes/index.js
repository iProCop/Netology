const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`
        <h1>🏠 Главная страница</h1>
        <nav>
            <a href="/">Главная</a> | 
            <a href="/about">О нас</a> | 
            <a href="/contacts">Контакты</a>
        </nav>
        <p>Добро пожаловать на наш сайт!</p>
        `);
});

module.exports = router;