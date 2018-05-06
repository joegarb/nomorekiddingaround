'use strict';

var app = require('angular').module('nomorekiddingaround.controllers', ['ngRoute']);

app.controller(
    'MainController',
    ['$route', require('./main.controller.js')]
);

app.controller(
    'RsvpController',
    ['$http', require('./rsvp/rsvp.controller.js')]
);

app.controller(
    'RsvpListController',
    ['$http', require('./rsvp-list/rsvp-list.controller.js')]
);
