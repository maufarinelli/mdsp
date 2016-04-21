(function(angular) {
	'use strict';

	function LandController($scope, $timeout, $location, $anchorScroll, HowToGetService, uiGmapGoogleMapApi) {
		var self = this,
			mapsConfig = HowToGetService.getMapsLandConfig(),
			mapsMarkers = HowToGetService.getMapsLandMarkers();

		$scope.$watch('currentLanguage', function(o, n) {
			self.landHeadTable = HowToGetService.getTableHeads();
			self.bodyLandPackages = HowToGetService.getTableLand();
		});

		uiGmapGoogleMapApi.then(function(maps) {
	    	self.map = {
	    		land1: mapsConfig.land1,
	    		land2: mapsConfig.land2,
	    		land3: mapsConfig.land3,
	    		land4: mapsConfig.land4
		    };
		    self.map.land1.control = {};
		    self.map.land2.control = {};
		    self.map.land3.control = {};
		    self.map.land4.control = {};
		    
            self.map.land1.line.icons = HowToGetService.getIconsConfig(google);
            self.map.land2.line.icons = HowToGetService.getIconsConfig(google);
            self.map.land3.line.icons = HowToGetService.getIconsConfig(google);
            self.map.land4.line.icons = HowToGetService.getIconsConfig(google);

		    self.map.markers = {
		    	land1Map: mapsMarkers.land1Markers,
		    	land2Map: mapsMarkers.land2Markers,
		    	land3Map: mapsMarkers.land3Markers,
		    	land4Map: mapsMarkers.land4Markers
		    };
    	});

    	$scope.$watch('howToGet.section.land.isActive', function(n, o) {
    		if(o !== n && n === true) {
    			$timeout(function() {
    				self.map.land1.control.refresh();
    				self.map.land2.control.refresh();
    				self.map.land3.control.refresh();
    				self.map.land4.control.refresh();
    			});    			
    		}
    	});

    	$scope.scrollTo = function(id) {
    		$location.hash(id);
      		$anchorScroll();
    	};
	}

	angular.module('howToGet')
		.controller('LandController', LandController)
})(window.angular);