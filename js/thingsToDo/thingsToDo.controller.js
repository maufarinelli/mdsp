(function(angular){
    'use strict';

    function ThingsToDoController($scope, thingsToDoService) {
        $scope.$watch('currentLanguage', function(o, n) {
            $scope.thingsToDo.sports = thingsToDoService.getSports();
            $scope.thingsToDo.leisure = thingsToDoService.getLeisure();
            $scope.thingsToDo.tours = thingsToDoService.getTours();
        });
    }

    angular.module('thingsToDo')
        .controller('ThingsToDoController', ThingsToDoController);
})(window.angular);