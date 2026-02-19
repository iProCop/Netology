const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>ℹ️ О нас</h1>
        <nav>
            <a href="/">Главная</a> | 
            <a href="/about">О нас</a> | 
            <a href="/contacts">Контакты</a>
        </nav>
        <p>Мы команда разработчиков, изучающих Express.js</p>
    `);
});

module.exports = router;