'use strict';

var app = require('angular').module('nomorekiddingaround.controllers', ['ngRoute']);

app.controller(
  'RsvpController',
  ['$scope', '$routeParams', require('./rsvp/rsvp.js')]
);
