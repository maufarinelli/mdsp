(function(angular) {
	'use strict';

	function AirplaneController($scope, HowToGetService, uiGmapGoogleMapApi) {
		var self = this;

		$scope.$watch('currentLanguage', function(o, n) {
			self.avionHeadTable = HowToGetService.getTableHeads(),
			self.bodyAxe = HowToGetService.getTableAxeCompany(),
			self.bodyOthers = HowToGetService.getTableOthersCompanies()
		});

		uiGmapGoogleMapApi.then(function(maps) {
	    	self.map = {
	    		avion: HowToGetService.getMapAvionConfig()	
		    };
		    
		    self.map.avion.line.icons = HowToGetService.getIconsConfig(google);

		    self.markers = {
		    	avionMap: HowToGetService.getMapAvionMarkers()
		    };
    	});
	}

	angular.module('howToGet')
		.controller('AirplaneController', AirplaneController)
})(window.angular);