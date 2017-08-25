'use strict';

module.exports = function($http) {
    var ctrl = this;
    ctrl.model = {numberOfGuests: 0};

    ctrl.submit = function() {
        ctrl.saving = true;
        $http({
            url: '/api/rsvp',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: ctrl.model
        }).then(function success(response) {
            ctrl.saved = true;
        }, function error(response) {
            ctrl.error = true;
        }).finally(function() {
            ctrl.saving = false;
        });
    };
};
