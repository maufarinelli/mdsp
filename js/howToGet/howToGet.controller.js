(function(angular){
	'use strict';

	function HowToGetController($scope, HowToGetService) {
		var isLoading = true;

		$scope.howToGet = {
			section: {
				airplane: {isActive: false},
				boat: {isActive: false},
				land: {isActive: false}
			}
		};
		

		$scope.$watch('currentLanguage', function(o, n) {
			$scope.howToGet.options = HowToGetService.getOptions();
			$scope.howToGet.avionHeadTable = HowToGetService.getTableHeads();
			$scope.howToGet.bodyAxe = HowToGetService.getTableAxeCompany();
			$scope.howToGet.bodyOthers = HowToGetService.getTableOthersCompanies();

			if(isLoading) {
				$scope.howToGet.section.airplane.isActive = true;
				isLoading = false;
			}
		});
	}

	angular.module('howToGet')
		.controller('HowToGetController', HowToGetController);
})(window.angular);