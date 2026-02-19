const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>📞 Контакты</h1>
        <nav>
            <a href="/">Главная</a> | 
            <a href="/about">О нас</a> | 
            <a href="/contacts">Контакты</a>
        </nav>
        <p>Email: info@example.com</p>
        <p>Телефон: +7 (999) 000-00-00</p>
    `);
});

module.exports = router;