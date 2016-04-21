(function(angular) {
	'use strict';

	function boatDirective() {
		return {
			restrict: 'E',
			require: '^howToGet',
			templateUrl: 'js/howToGet/boat/boat.html',
			controller: 'BoatController',
			controllerAs: 'boat'
		};
	}

	angular.module('howToGet')
		.directive('boat', boatDirective);
})(window.angular);