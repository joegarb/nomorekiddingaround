'use strict';

const express = require('express');
const bodyParser= require('body-parser');
const mongo = require('mongodb').MongoClient;
const app = express();

const port = process.env.API_PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*mongo.connect('link-to-mongodb', (err, database) => {
    if (err) {
        console.log(err);
        return;
    }
    db = database;
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
});*/

// app.get('/api', (req, res) => {
//     res.send('This is the API');
// });

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
