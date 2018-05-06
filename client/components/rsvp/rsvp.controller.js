'use strict';

module.exports = function($http) {
    var vm = this;
    vm.model = {numberOfGuests: 0};

    vm.submit = function() {
        vm.saving = true;
        $http({
            url: '/api/rsvp',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: vm.model
        }).then(function success(response) {
            vm.saved = true;
        }, function error(response) {
            vm.error = true;
        }).finally(function() {
            vm.saving = false;
        });
    };
};
