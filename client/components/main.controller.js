'use strict';

module.exports = function($route) {
    var vm = this;

    vm.getActivePage = function() {
        return $route.current ? $route.current.activePage : undefined;
    };
};
