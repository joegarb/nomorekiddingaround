'use strict';

const winston = require('winston');
const moment = require('moment');

const logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logger.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 1,
            colorize: false,
            timestamp: () => {
                return moment().format();
            }
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
            timestamp: () => {
                return moment().format();
            }
        })
    ],
    exitOnError: false
});

logger.stream = {
    write: (message, encoding) => {
        // Using substring to remove extra line break added by morgan since one is also added by winston
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
};

module.exports = logger;
