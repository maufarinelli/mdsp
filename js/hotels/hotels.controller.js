(function(angular){
	'use strict';

	function HotelsController(hotelsService) {
		var self = this;

		hotelsService.getHotels().then(function(res) {
			console.log(res.data);
			self.hotelsList = res.data;
		}, function() {

		});
	}

	angular.module('hotels')
		.controller('HotelsController', HotelsController);
})(window.angular);