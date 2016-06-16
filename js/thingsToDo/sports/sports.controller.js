(function(angular) {
    'use strict';

    function SportsController($scope, sportsService) {
        $scope.$watch('currentLanguage', function(o, n) {
            $scope.sports.divingSpots = sportsService.getDivingSpots();
        });
    }

    angular.module('thingsToDo')
        .controller('SportsController', SportsController);

})(window.angular);