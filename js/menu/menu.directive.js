(function(angular){
	'use strict';
	
	function mainMenu() {
		return {
			restrict: 'E',
			templateUrl: 'js/menu/menu.html',
			bindToController: true, 
			controllerAs: 'menu', 
			controller: 'MenuController'
		};
	}

	angular.module('menu', ['languages'])
		.directive('mainMenu', mainMenu);
})(window.angular);