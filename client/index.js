'use strict';

require('angular').module(
    'nomorekiddingaround',
    [
        'ngRoute', require('angular-ui-bootstrap'),
        'nomorekiddingaround.controllers'
    ],
    ['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.when(
                '/',
                {
                    templateUrl: 'components/home/home.html',
                    activePage: 'home'
                }
            );

            $routeProvider.when(
                '/our-story',
                {
                    templateUrl: 'components/our-story/our-story.html',
                    activePage: 'our-story'
                }
            );

            $routeProvider.when(
                '/our-entourage',
                {
                    templateUrl: 'components/our-entourage/our-entourage.html',
                    activePage: 'our-entourage'
                }
            );

            $routeProvider.when(
                '/the-wedding',
                {
                    templateUrl: 'components/the-wedding/the-wedding.html',
                    activePage: 'the-wedding'
                }
            );

            $routeProvider.when(
                '/travel-and-lodging',
                {
                    templateUrl: 'components/travel/travel.html',
                    activePage: 'travel-and-lodging'
                }
            );

            $routeProvider.when(
                '/things-to-do',
                {
                    templateUrl: 'components/things-to-do/things-to-do.html',
                    activePage: 'things-to-do'
                }
            );

            $routeProvider.when(
                '/registry',
                {
                    templateUrl: 'components/registry/registry.html',
                    activePage: 'registry'
                }
            );

            $routeProvider.when(
                '/credits',
                {
                    templateUrl: 'components/credits/credits.html',
                    activePage: 'credits'
                }
            );

            $routeProvider.when(
                '/rsvp',
                {
                    templateUrl: 'components/rsvp/rsvp.html',
                    activePage: 'rsvp'
                }
            );

            $routeProvider.when(
                '/rsvp-list',
                {
                    templateUrl: 'components/rsvp-list/rsvp-list.html',
                    activePage: 'rsvp-list'
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

require('./components');
