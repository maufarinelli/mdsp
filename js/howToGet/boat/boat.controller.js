(function(angular) {
	'use strict';

	function BoatController($scope, $timeout, HowToGetService, uiGmapGoogleMapApi, uiGmapIsReady) {
		var self = this;

		$scope.$watch('currentLanguage', function(o, n) {
			self.boatHeadTable = HowToGetService.getTableHeads();
			self.bodyBoats = HowToGetService.getTableBoats();
		});		

		uiGmapGoogleMapApi.then(function(maps) {
			self.map = {
    			boat: HowToGetService.getMapBoatConfig() 	
		    };
		    self.map.boat.control = {};

		    self.map.markers = {
		    	boatMap: HowToGetService.getMapBoatMarkers()
		    };

            self.map.boat.line.icons = HowToGetService.getIconsConfig(google);
    	});

    	$scope.$watch('howToGet.section.boat.isActive', function(n, o) {
    		if(o !== n && n === true) {
    			$timeout(function() {
    				self.map.boat.control.refresh();
    			});    			
    		}
    	});    	
	}

	angular.module('howToGet')
		.controller('BoatController', BoatController)
})(window.angular);