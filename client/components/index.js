'use strict';

var app = require('angular').module('nomorekiddingaround.controllers', ['ngRoute']);

app.controller(
  'RsvpController',
  ['$http', require('./rsvp/rsvp.js')]
);
