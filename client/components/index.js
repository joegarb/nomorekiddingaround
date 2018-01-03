'use strict';

var app = require('angular').module('nomorekiddingaround.controllers', ['ngRoute']);

app.controller(
    'RsvpController',
    ['$http', require('./rsvp/rsvp.js')]
);

app.controller(
    'RsvpListController',
    ['$http', require('./rsvp-list/rsvp-list.js')]
);
