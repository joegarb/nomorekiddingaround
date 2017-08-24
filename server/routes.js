'use strict';

const express = require('express');
const router = express.Router();
const moment = require('moment');
const path = require('path');
const db = require('./database');
const logger = require('./logger');

router.get('/api/rsvp', (req, res) => {
    db.getDb().collection('rsvp').find().toArray((err, results) => {
        if (err) {
            logger.error(err);
            res.send(err);
        } else {
            res.send(results);
        }
    });
});

router.post('/api/rsvp', (req, res) => {
    logger.info('POST /rsvp', req.body);
    req.body.dateAdded = moment().format();
    db.getDb().collection('rsvp').save(req.body, (err, result) => {
        if (err) {
            logger.error(err);
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.get('/*', function(req, res){
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = router;
