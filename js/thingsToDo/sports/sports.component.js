(function(angular) {
    'use strict';

    angular.module('thingsToDo')
        .component('sports', {
            controller: 'SportsController',
            controllerAs: 'sports',
            templateUrl: 'js/thingsToDo/sports/sports.html'
        });

})(window.angular);