(function(angular) {
    'use strict';

    function sportsService($rootScope, $filter) {
        var divingSpots;

        $rootScope.$watch('currentLanguage', function(o, n) {
            divingSpots = [
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option1')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option2')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option3')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option4')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option5')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option6')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option7')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option8')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option9')
                },
                {
                    label: $filter('translate')('thingsToDo.sports.diving.option10')
                }
            ];
        });

        this.getDivingSpots = function() {
            return divingSpots;
        };
    }

    angular.module('thingsToDo')
        .service('sportsService', sportsService);
})(window.angular);