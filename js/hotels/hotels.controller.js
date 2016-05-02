(function(angular){
	'use strict';

	function HotelsController(hotelsService) {
		var self = this;

		hotelsService.getHotels().then(function(data) {
			self.hotelsList = data;
			console.log(self.hotelsList);
		}, function() {

		});
	}

	angular.module('hotels')
		.controller('HotelsController', HotelsController);
})(window.angular);