'use strict'; 

(function(angular){
	function mainMenu() {
		return {
			restrict: 'E',
			templateUrl: 'js/menu/menu.html',
			bindToController: true, 
			controllerAs: 'menu', 
			controller: 'MenuController'
		};
	}

	angular.module('menu', [])
		.directive('mainMenu', mainMenu);
})(window.angular);