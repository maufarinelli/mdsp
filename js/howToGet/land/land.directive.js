(function(angular) {
	'use strict';

	function landDirective() {
		return {
			restrict: 'E',
			templateUrl: 'js/howToGet/land/land.html',
			controller: 'LandController',
			controllerAs: 'land'
		};
	}

	angular.module('howToGet')
		.directive('land', landDirective);
})(window.angular);