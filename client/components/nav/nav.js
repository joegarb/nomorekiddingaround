'use strict';

module.exports = function($route) {
    var vm = this;

    vm.getActivePage = function() {
        return $route.current.activePage;
    };
};
