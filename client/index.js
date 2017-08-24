'use strict';

require('angular').module(
  'nomorekiddingaround',
  [
    'ngRoute', 'angularCSS',
    'nomorekiddingaround.controllers'
  ],
  ['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.when(
        '/rsvp',
        {
          templateUrl: 'components/rsvp/rsvp.html',
          controller: 'RsvpController',
          css: 'components/rsvp/rsvp.css'
        }
      );

      $routeProvider.otherwise(
        {
          redirectTo: '/rsvp'
        }
      );

      $locationProvider.html5Mode(true);
    }]
);

require('angular-route');
require('angular-css');

require('./components');
