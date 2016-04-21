(function(angular) {
	'use strict';

	function hotelsDirective() {
		return {
			restrict: 'E',
			templateUrl: 'js/hotels/hotels.html',
			controller: 'HotelsController',
			controllerAs: 'hotels'
		};
	}

	angular.module('hotels', [])
		.directive('hotels', hotelsDirective);
})(window.angular);