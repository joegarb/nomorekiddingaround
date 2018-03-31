'use strict';

var app = require('angular').module('nomorekiddingaround.controllers', ['ngRoute']);

app.controller(
    'HomeController',
    ['$http', require('./home/home.js')]
);

app.controller(
    'OurEntourageController',
    ['$http', require('./our-entourage/our-entourage.js')]
);

app.controller(
    'OurStoryController',
    ['$http', require('./our-story/our-story.js')]
);

app.controller(
    'RegistryController',
    ['$http', require('./registry/registry.js')]
);

app.controller(
    'RsvpController',
    ['$http', require('./rsvp/rsvp.js')]
);

app.controller(
    'RsvpListController',
    ['$http', require('./rsvp-list/rsvp-list.js')]
);

app.controller(
    'TheWeddingController',
    ['$http', require('./the-wedding/the-wedding.js')]
);

app.controller(
    'ThingsToDoController',
    ['$http', require('./things-to-do/things-to-do.js')]
);


app.controller(
    'TravelController',
    ['$http', require('./travel/travel.js')]
);
