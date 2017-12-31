'use strict';

const mongoUrl = process.env.MONGO_URL;
const mongo = require('mongodb').MongoClient;
const logger = require('./logger');

module.exports = {
    getDb: () => {
        return new Promise((resolve, reject) => {
            // Get a new connection on every request to avoid hitting a "Topology was destroyed" mongo error sooner or later
            // when maintaining a long running connection
            mongo.connect(mongoUrl, (err, database) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(database);
                }
            });
        });
    }
};

// Test connection at startup
module.exports.getDb().then(() => {
    logger.info('Connected to database');
}).catch((err) => {
    logger.error(err);
});
