(function(angular) {
	'use strict';

	function hotelsDirective() {
		return {
			restrict: 'E',
			controller: 'HotelsController',
			controllerAs: 'hotelsCtrl'
		};
	}

	angular.module('hotels', ['infinite-scroll'])
		.directive('hotels', hotelsDirective);
})(window.angular);