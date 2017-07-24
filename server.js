'use strict';

const port = 8000;
const mongoUrl = process.env.MONGO_URL;

const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const app = express();
const winston = require('winston');
const morgan = require('morgan');
const moment = require('moment');

var logger = new winston.Logger({
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
        logger.info(message);
    }
};

app.enable('trust proxy');
app.use(morgan(':remote-addr :method :url :status :res[content-length] - :response-time ms', {'stream': logger.stream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let db;
mongo.connect(mongoUrl, (err, database) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info('Connected to database');
        db = database;
    }
});

app.get('/rsvp', (req, res) => {
    db.collection('rsvp').find().toArray((err, results) => {
        if (err) {
            logger.error(err);
            res.send(err);
        } else {
            res.send(results);
        }
    });
});

app.post('/rsvp', (req, res) => {
    logger.info('POST /rsvp', req.body);
    db.collection('rsvp').save(req.body, (err, result) => {
        if (err) {
            logger.error(err);
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(port, () => {
    logger.info('Listening on port ' + port);
});
