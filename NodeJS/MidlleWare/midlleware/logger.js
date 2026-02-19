const fs = require('fs')
const os = require('os')

const logger = (req, res, next) => {
    const now = new Date().toLocaleTimeString();
    const {url, method} = req;
    const logData = `${now} ${url} ${method}`;

    console.log(logData);

    fs.appendFile("server.log", logData + os.EOL, (err) => {
        if(err) throw err;
    })

    next();
}

module.exports = logger;