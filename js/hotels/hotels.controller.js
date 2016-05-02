(function(angular){
	'use strict';

	function HotelsController($scope, hotelsService) {
		var self = this;

		hotelsService.getHotels().then(function(data) {
			this.hotelsList = data;
			console.log(this.hotelsList);
		}, function() {

		});
	}

	angular.module('hotels')
		.controller('HotelsController', HotelsController);
})(window.angular);