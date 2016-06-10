(function(angular){
    'use strict';

    function ThingsToDoController(thingsToDoService) {
        this.sports = thingsToDoService.getSports();
        this.leisure = thingsToDoService.getLeisure();
        this.tours = thingsToDoService.getTours();
    }

    angular.module('thingsToDo')
        .controller('ThingsToDoController', ThingsToDoController);
})(window.angular);