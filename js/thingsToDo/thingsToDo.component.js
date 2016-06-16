(function(angular) {
    'use strict';

    angular.module('thingsToDo', [])
        .component('thingsToDo', {
            controller: 'ThingsToDoController',
            controllerAs: 'thingsToDo',
            templateUrl: 'js/thingsToDo/template.html'
        });

})(window.angular);