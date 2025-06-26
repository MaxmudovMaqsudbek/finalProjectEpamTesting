const winston = require('winston');

// Configure logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: 'test.log' }),
        new winston.transports.Console()
    ]
});

global.logger = logger;

exports.config = {
    specs: ['./src/specs/**/*.js'],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'MicrosoftEdge'
    }],
    logLevel: 'info',
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'edgedriver'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },
    reporters: ['spec']
}