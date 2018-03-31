'use strict';

require('angular').module(
    'nomorekiddingaround',
    [
        'ngRoute', 'angularCSS', require('angular-ui-bootstrap'),
        'nomorekiddingaround.controllers'
    ],
    ['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.when(
                '/',
                {
                    templateUrl: 'components/home/home.html',
                    css: 'components/home/home.css'
                }
            );

            $routeProvider.when(
                '/our-story',
                {
                    templateUrl: 'components/our-story/our-story.html',
                    css: 'components/our-story/our-story.css'
                }
            );

            $routeProvider.when(
                '/our-entourage',
                {
                    templateUrl: 'components/our-entourage/our-entourage.html',
                    css: 'components/our-entourage/our-entourage.css'
                }
            );

            $routeProvider.when(
                '/the-wedding',
                {
                    templateUrl: 'components/the-wedding/the-wedding.html',
                    css: 'components/the-wedding/the-wedding.css'
                }
            );

            $routeProvider.when(
                '/travel-and-lodging',
                {
                    templateUrl: 'components/travel/travel.html',
                    css: 'components/travel/travel.css'
                }
            );

            $routeProvider.when(
                '/things-to-do',
                {
                    templateUrl: 'components/things-to-do/things-to-do.html',
                    css: 'components/things-to-do/things-to-do.css'
                }
            );

            $routeProvider.when(
                '/registry',
                {
                    templateUrl: 'components/registry/registry.html',
                    css: 'components/registry/registry.css'
                }
            );

            $routeProvider.when(
                '/rsvp',
                {
                    templateUrl: 'components/rsvp/rsvp.html',
                    css: 'components/rsvp/rsvp.css'
                }
            );

            $routeProvider.when(
                '/rsvp-list',
                {
                    templateUrl: 'components/rsvp-list/rsvp-list.html',
                    css: 'components/rsvp-list/rsvp-list.css'
                }
            );

            $routeProvider.otherwise(
                {
                    redirectTo: '/'
                }
            );

            $locationProvider.html5Mode(true);
        }]
);

require('angular-route');
require('angular-css');

require('./components');
