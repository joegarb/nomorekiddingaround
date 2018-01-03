'use strict';

module.exports = function($http) {
    var vm = this;

    function load() {
        vm.loading = true;
        $http({
            url: '/api/rsvp',
            method: 'GET'
        }).then(function success(response) {
            vm.list = response.data;
        }, function error(response) {
        }).finally(function() {
            vm.loading = false;
        });
    }

    load();
};
