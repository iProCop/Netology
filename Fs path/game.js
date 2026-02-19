const fs = require('fs')
const path = require('path')
const readline = require('readline')

const logFilePath = process.argv[2];

if(!logFilePath) {
    console.error("Ошибка. Необходимо указать путь к файлу для логирования")
    console.log("Пример: node game.js results.log")
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function logResult(resultData) {
    const logEntry = JSON.stringify(resultData) + '\n';

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Ошибка записи в файл', err)
        }
    });
}

function playRound() {
    rl.question('Ваш выбор (1, 2): ', (userInput) => {
        if(userInput.toLowerCase() === 'exit') {
            console.log('Игра окончена');
            rl.close;
            return
        }

        const userChoice = parseInt(userInput);
        if(userChoice !==1 && userChoice !== 2) {
            console.log('Введите 1 или 2');
            playRound();
            return;
        }

        const computerChoise = Math.floor(Math.random() * 2) + 1;
        const isWin = userChoice === computerChoise;

        console.log(isWin ? 'Вы выйграли!' : 'Вы проиграли!');

        const record = {
            date: new Date().toISOString(),
            user: userChoice,
            computer: computerChoise,
            result: isWin ? 'win' : 'lose'
        };

        logResult(record);
        playRound();
    });
}

playRound();