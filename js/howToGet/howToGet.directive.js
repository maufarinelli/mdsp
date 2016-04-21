(function(angular) {
	'use strict';

	function howToGetDirective(uiGmapGoogleMapApi, HowToGetService, $compile) {
		return {
			restrict: 'E',
			controller: 'HowToGetController',
			controllerAs: 'howToGet',
			link: function(scope, element) {
				// By default, section airplane is active
				var previousIndex = 0,
					previousSelectedTabId = 'airplane';

				scope.$watch('currentLanguage', function(o, n) {
					scope.howToGet.options[previousIndex].isSelected = true;
					scope.howToGet.section[previousSelectedTabId].isActive = true;
				});

				scope.tabSelect = function(option, event, i) {					
					var selectedTabId = option.id;

					scope.howToGet.options[previousIndex].isSelected = false;
					option.isSelected = true;

					scope.howToGet.section[previousSelectedTabId].isActive = false;
					scope.howToGet.section[selectedTabId].isActive = true;

					previousIndex = i;
					previousSelectedTabId = selectedTabId;
					event.preventDefault(); 
				};				
			}
		}
	}

	angular.module('howToGet', [])
		.directive('howToGet', howToGetDirective);
})(window.angular);