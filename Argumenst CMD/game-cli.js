const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 0;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Загадано число в диапозоне от ${min} до ${max}`);

let pullNumber = 0;

let textNumber;

function asQuestion() {
    rl.question('Введите свое число', (input) => {
        const guess = Number(input);

        pullNumber++

        if (pullNumber === 1) {
            textNumber = "попытка";
        } else if (pullNumber > 1 && pullNumber < 5) {
            textNumber = "попытки";
        } else {
            textNumber = "попыток";
        }

        if(Number.isNaN(guess)) {
            console.log('Пожалуйста введите корректное число');
            return asQuestion();
        }
    
        if(guess < secretNumber) {
            console.log(`Число ${guess} меньше, поднакинь немного`)
            return asQuestion();
        }
    
        if(guess > secretNumber) {
            console.log(`Число ${guess} больше, подскинь немного`)
            return asQuestion();
        } else {
            console.log(`Твое число ${guess}, загаданное число ${secretNumber}, тебе понадобилось ${pullNumber} ${textNumber}, ты молодец!`)
            rl.close();
        }
    });  
}

asQuestion();

rl.on('Close', () => {
    console.log('Игра завершена!')
    process.exit(0);
})