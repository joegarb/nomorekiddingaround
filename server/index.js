'use strict';

const port = 8000;

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const path = require('path');

app.use(helmet());
app.enable('trust proxy');

app.use((req, res, next) => {
    if (req.headers.host.slice(0, 4) === 'www.') {
        // Redirect www to non-www
        let newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    if (req.url.indexOf('-rev-') !== -1) {
        // Let files with hashes in the names be cached for a long time
        res.set('Cache-Control', 'public, max-age=31536000');
        res.set('Expires', new Date(Date.now() + 31536000000).toUTCString());
    }
    next();
});

app.use(morgan(':remote-addr :method :url :status :res[content-length] - :response-time ms', {'stream': logger.stream}));
app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes'));

app.listen(port, () => {
    logger.info('Listening on port ' + port);
});
