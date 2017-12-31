'use strict';

const express = require('express');
const router = express.Router();
const moment = require('moment');
const path = require('path');
const database = require('./database');
const logger = require('./logger');

router.get('/api/rsvp', (req, res) => {
    database.getDb().then((db) => {
        db.collection('rsvp').find().toArray((err, results) => {
            if (err) {
                logger.error(err);
                res.send(err);
            } else {
                res.send(results);
            }
        });
    }).catch((err) => {
        logger.error(err);
    });
});

router.post('/api/rsvp', (req, res) => {
    logger.info('POST /rsvp', req.body);
    req.body.dateAdded = moment().format();
    database.getDb().then((db) => {
        db.collection('rsvp').save(req.body, (err, result) => {
            if (err) {
                logger.error(err);
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }).catch((err) => {
        logger.error(err);
    });
});

router.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = router;
