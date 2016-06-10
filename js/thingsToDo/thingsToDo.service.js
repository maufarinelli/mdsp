(function(angular) {
    'use strict';

    function thingsToDoService($rootScope, $filter) {
        var sports,
            leisure,
            tours;

        $rootScope.$watch('currentLanguage', function(o, n) {
            sports = [
                {
                    label: $filter('translate')('thingsToDo.sport1.label'),
                    url: $filter('translate')('thingsToDo.sport1.url')
                },
                {
                    label: $filter('translate')('thingsToDo.sport2.label'),
                    url: $filter('translate')('thingsToDo.sport2.url')
                },
                {
                    label: $filter('translate')('thingsToDo.sport3.label'),
                    url: $filter('translate')('thingsToDo.sport3.url')
                },
                {
                    label: $filter('translate')('thingsToDo.sport4.label'),
                    url: $filter('translate')('thingsToDo.sport4.url')
                }
            ];

            leisure = [
                {
                    label: $filter('translate')('thingsToDo.leisure1.label'),
                    url: $filter('translate')('thingsToDo.leisure1.url')
                },
                {
                    label: $filter('translate')('thingsToDo.leisure2.label'),
                    url: $filter('translate')('thingsToDo.leisure2.url')
                },
                {
                    label: $filter('translate')('thingsToDo.leisure3.label'),
                    url: $filter('translate')('thingsToDo.leisure3.url')
                }
            ];

            tours = [
                {
                    label: $filter('translate')('thingsToDo.tour1.label'),
                    url: $filter('translate')('thingsToDo.tour1.url')
                },
                {
                    label: $filter('translate')('thingsToDo.tour2.label'),
                    url: $filter('translate')('thingsToDo.tour2.url')
                },
                {
                    label: $filter('translate')('thingsToDo.tour3.label'),
                    url: $filter('translate')('thingsToDo.tour3.url')
                }
            ];
        });

        this.getSports = function() {
            return sports;
        };

        this.getLeisure = function() {
            return leisure;
        };

        this.getTours = function() {
            return tours
        };
    }

    angular.module('thingsToDo')
        .service('thingsToDoService', thingsToDoService);
})(window.angular);