'use strict';

const mongoUrl = process.env.MONGO_URL;
const mongo = require('mongodb').MongoClient;
const logger = require('./logger');

let db;

mongo.connect(mongoUrl, (err, database) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info('Connected to database');
        db = database;
    }
});

module.exports = {
    getDb: () => {
        return db;
    }
};
