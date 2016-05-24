(function(angular) {
    'use strict';

    function thingsToDoDirective() {
        return {
            restrict: 'E'
        }
    }

    angular.module('thingsToDo', [])
        .directive('thingsToDo', thingsToDoDirective);

})(window.angular);