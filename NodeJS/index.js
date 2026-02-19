const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    
    // Парсинг URL
    const urlParsed = url.parse(req.url, true);

    // Деструктуризация
    const {pathname, query} = urlParsed;
    const {method, url: requestUrl} = req;  // переименовал 'url' чтобы не путать с модулем

    // Вывод информации о запросе
    console.log('╔════════════════════════════════════════════════╗');
    console.log('║           === НОВЫЙ ЗАПРОС ===                ║');
    console.log('╠════════════════════════════════════════════════╣');
    console.log('║  Полный URL:', requestUrl.padEnd(37), '║');
    console.log('║  Pathname:  ', pathname.padEnd(37), '║');
    console.log('║  Method:    ', method.padEnd(37), '║');
    console.log('║  Query:     ', JSON.stringify(query).padEnd(37), '║');
    console.log('╚════════════════════════════════════════════════╝\n');

    // Объект пользователя
    const man = {
        name: 'Вячеслав',
        age: 30,
        city: 'Хабаровск',
        work: 'Программист',
    }

    // Деструктуризация объекта
    const {name, age, city, work} = man;

    // Приветствие
    console.log(`👋 Приветствую Вас ${name}, Ваше текущее местоположение ${city}`);
    console.log(`ℹ️  Чтобы узнать информацию о профиле, вызовите функцию INFO()\n`);

    // Функция вывода информации
    const INFO = (person) => {
        console.log('╔════════════════════════════════════════════════╗');
        console.log('║           ИНФОРМАЦИЯ О ПРОФИЛЕ                ║');
        console.log('╠════════════════════════════════════════════════╣');
        console.log('║  Имя:       ', person.name.padEnd(33), '║');
        console.log('║  Возраст:   ', person.age, 'лет'.padEnd(30), '║');
        console.log('║  Город:     ', person.city.padEnd(33), '║');
        console.log('║  Должность: ', person.work.padEnd(33), '║');
        console.log('╚════════════════════════════════════════════════╝\n');
    }

    // ВЫЗОВ ФУНКЦИИ
    INFO(man);

    // Отправка ответа клиенту
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Сервер - ${pathname}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body { 
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 40px 20px;
                    color: #333;
                }
                
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                    overflow: hidden;
                }
                
                header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                
                header h1 {
                    font-size: 28px;
                    margin-bottom: 10px;
                }
                
                header p {
                    opacity: 0.9;
                    font-size: 14px;
                }
                
                .content {
                    padding: 30px;
                }
                
                .info-card {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    border-left: 4px solid #667eea;
                }
                
                .info-card h3 {
                    color: #667eea;
                    margin-bottom: 10px;
                    font-size: 18px;
                }
                
                .info-card p {
                    color: #555;
                    line-height: 1.6;
                }
                
                .query-item {
                    background: white;
                    padding: 15px;
                    border-radius: 8px;
                    margin: 5px 0;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                
                .query-key {
                    font-weight: bold;
                    color: #667eea;
                }
                
                .query-value {
                    color: #555;
                }
                
                footer {
                    text-align: center;
                    padding: 20px;
                    background: #f8f9fa;
                    color: #777;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header>
                    <h1>📡 Информация о запросе</h1>
                    <p>${method} ${pathname}</p>
                </header>
                
                <div class="content">
                    <div class="info-card">
                        <h3>🌐 URL запроса</h3>
                        <p><strong>Полный URL:</strong> ${requestUrl}</p>
                        <p><strong>Pathname:</strong> ${pathname}</p>
                    </div>
                    
                    <div class="info-card">
                        <h3>📦 Метод запроса</h3>
                        <p><strong>Method:</strong> ${method}</p>
                    </div>
                    
                    <div class="info-card">
                        <h3>🔍 Параметры запроса (Query)</h3>
                        ${Object.keys(query).length > 0 
                            ? Object.entries(query).map(([key, value]) => 
                                `<div class="query-item">
                                    <span class="query-key">${key}:</span> 
                                    <span class="query-value">${value}</span>
                                </div>`
                            ).join('')
                            : '<p>Нет параметров</p>'
                        }
                    </div>
                    
                    <div class="info-card">
                        <h3>👤 Информация о пользователе</h3>
                        <p><strong>Имя:</strong> ${name}</p>
                        <p><strong>Возраст:</strong> ${age} лет</p>
                        <p><strong>Город:</strong> ${city}</p>
                        <p><strong>Должность:</strong> ${work}</p>
                    </div>
                </div>
                
                <footer>
                    <p>Сервер работает на Node.js • Порт: ${PORT}</p>
                </footer>
            </div>
        </body>
        </html>
    `);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('╔════════════════════════════════════════════════╗');
    console.log('║         ✅ СЕРВЕР УСПЕШНО ЗАПУЩЕН            ║');
    console.log('╠════════════════════════════════════════════════╣');
    console.log('║  🌐 Адрес: http://localhost:' + PORT.toString().padEnd(23) + '║');
    console.log('║  📡 Порт:  ' + PORT.toString().padEnd(37) + '║');
    console.log('╚════════════════════════════════════════════════╝\n');
});