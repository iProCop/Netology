#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

function modifyDate(date, unit, amount) {
    const result = new Date(date);
    switch (unit) {
        case 'days':
        case 'd':
            result.setDate(result.getDate() + amount);
            break;
        case 'months':
        case 'month':
            result.setMonth(result.getMonth() + amount);
            break;
        case 'years':
        case 'year':
            result.setFullYear(result.getFullYear() + amount);
            break;
        default:
            break;
    }
    return result;
}

function getDatePart(date, part) {
    switch (part) {
        case 'year':
            return date.getFullYear();
        case 'month':
            return date.getMonth() + 1;
        case 'date':
            return date.toISOString().split('T')[0];
        default:
            return date.toISOString();
    }
}

yargs(hideBin(process.argv))
    .command('current', 'Показать текущую дату и время', (yargs) => {
        return yargs
            .option('year', {
                alias: 'y',
                type: 'boolean',
                description: 'Показать только год'
            })
            .option('month', {
                alias: 'm',
                type: 'boolean',
                description: 'Показать только месяц'
            })
            .option('date', {
                alias: 'd',
                type: 'boolean',
                description: 'Показать дату (YYYY-MM-DD)'
            });
    }, (argv) => {
        const now = new Date();
        if (argv.year) {
            console.log(getDatePart(now, 'year'));
        } else if (argv.month) {
            console.log(getDatePart(now, 'month'));
        } else if (argv.date) {
            console.log(getDatePart(now, 'date'));
        } else {
            console.log(now.toISOString());
        }
    })

    .command('add', 'Добавить время к текущей дате', (yargs) => {
        return yargs
            .option('days', {
                alias: 'd',
                type: 'number',
                description: 'Добавить дней'
            })
            .option('month', {
                type: 'number',
                description: 'Добавить месяцев'
            })
            .option('year', {
                alias: 'y',
                type: 'number',
                description: 'Добавить лет'
            });
    }, (argv) => {
        let now = new Date();
        if (argv.days) now = modifyDate(now, 'days', argv.days);
        if (argv.month) now = modifyDate(now, 'months', argv.month);
        if (argv.year) now = modifyDate(now, 'years', argv.year);
        
        console.log(now.toISOString());
    })

    .command('sub', 'Вычесть время из текущей даты', (yargs) => {
        return yargs
            .option('days', {
                alias: 'd',
                type: 'number',
                description: 'Вычесть дней'
            })
            .option('month', {
                type: 'number',
                description: 'Вычесть месяцев'
            })
            .option('year', {
                alias: 'y',
                type: 'number',
                description: 'Вычесть лет'
            });
    }, (argv) => {
        let now = new Date();
        if (argv.days) now = modifyDate(now, 'days', -argv.days);
        if (argv.month) now = modifyDate(now, 'months', -argv.month);
        if (argv.year) now = modifyDate(now, 'years', -argv.year);

        console.log(now.toISOString());
    })
    
    .help()
    .argv;