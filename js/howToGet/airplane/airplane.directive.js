(function(angular) {
	'use strict';

	function airplaneDirective() {
		return {
			restrict: 'E',
			require: '^howToGet',
			templateUrl: 'js/howToGet/airplane/airplane.html',
			controller: 'AirplaneController',
			controllerAs: 'airplane'
		};
	}

	angular.module('howToGet')
		.directive('airPlane', airplaneDirective);
})(window.angular);