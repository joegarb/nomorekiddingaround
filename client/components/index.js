'use strict';

var app = require('angular').module('nomorekiddingaround.controllers', ['ngRoute']);

app.controller(
    'HomeController',
    require('./home/home.js')
);

app.controller(
    'OurEntourageController',
    require('./our-entourage/our-entourage.js')
);

app.controller(
    'OurStoryController',
    require('./our-story/our-story.js')
);

app.controller(
    'RegistryController',
    require('./registry/registry.js')
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
    require('./the-wedding/the-wedding.js')
);

app.controller(
    'ThingsToDoController',
    require('./things-to-do/things-to-do.js')
);


app.controller(
    'TravelController',
    require('./travel/travel.js')
);
