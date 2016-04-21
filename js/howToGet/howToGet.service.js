(function(angular) {
	'use strict';
	
	function HowToGetService($rootScope, $filter, uiGmapGoogleMapApi) {
		var options, 
			tableHeads, 
			tableAxeCompany, 
			tableOthersCompanies, 
			tableBoats,
			tableLand;

		$rootScope.$watch('currentLanguage', function(o, n) {
			options = [
				{
					id: 'airplane',
					hash: '#howtoget-airplane',
					title: $filter('translate')('howToGet.option1'),
					details1: $filter('translate')('howToGet.option1.details1'),
					details2: $filter('translate')('howToGet.option1.details2'),
				},
				{
					id: 'boat',
					hash: '#howtoget-boat',
					title: $filter('translate')('howToGet.option2'),
					details1: $filter('translate')('howToGet.option2.details1'),
					details2: $filter('translate')('howToGet.option2.details2'),
				},
				{
					id: 'land',
					hash: '#howtoget-land',
					title: $filter('translate')('howToGet.option3'),
					details1: $filter('translate')('howToGet.option3.details1'),
					details2: $filter('translate')('howToGet.option3.details2'),
				}
			];

			tableHeads = [
				$filter('translate')('howToGet.headOrigin'),
				$filter('translate')('howToGet.head1'),
				$filter('translate')('howToGet.head2'),
				$filter('translate')('howToGet.head3')
			];
					
			tableAxeCompany = [{
					hour: '10:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '15:50h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '11:20h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '15:40h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
			];
					
			tableOthersCompanies = [{
					hour: '8:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '12:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '15:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '09:15h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '13:15h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '16:15h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				}
			];

			tableBoats = [{			
					hour: '8:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '09:00h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '10:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '13:00h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '14:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '09:00h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '11:30h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '13:00h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					hour: '15:00h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				}
			];

			tableLand = [{
					origin: $filter('translate')('howToGet.land.origin'),
					hour: '05:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin'),
					hour: '09:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin'),
					hour: '11:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin'),
					hour: '13:30h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin'),
					hour: '16:00h',
					destination: 'Morro de São Paulo',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin.return'),
					hour: '06:30h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin.return'),
					hour: '08:30h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin.return'),
					hour: '10:30h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin.return'),
					hour: '13:00h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				},
				{
					origin: $filter('translate')('howToGet.land.origin.return'),
					hour: '15:30h',
					destination: 'Salvador',
					frequency: $filter('translate')('howToGet.frequency')
				}
			];
		});

		var mapAvionConfig = {
			center: { latitude: -13.1282496, longitude: -38.5335562 },
	    	zoom: 9,
	    	options: {
	    		scrollwheel: false
	    	},
	    	line: {
	    		id: 1,
	    		path: [{
			    	latitude: -13.3782496,
	        		longitude: -38.9235562
			    },
			    {
			    	latitude: -12.9112546,
	        		longitude: -38.3331294
			    }],
			    stroke: {
                    color: '#337ab7',
                    weight: 3
                }
	    	}
		};

		var mapAvionMarkers = [{
	    	latitude: -13.3782496,
    		longitude: -38.9235562,
    		id: 1
	    },
	    {
	    	latitude: -12.9112546,
    		longitude: -38.3331294,
    		id: 2
	    }];

		var mapBoatConfig = {
			center: { latitude: -12.8629238, longitude: -39.675972 },
	    	zoom: 9,
	    	options: {
	    		scrollwheel: false
	    	},
	    	line: {
	    		id: 1,
	    		path: [{
			    	latitude: -13.3782496,
	        		longitude: -38.9235562
			    },{
			    	latitude: -12.9529238,
	        		longitude: -38.505972
			    }],
			    stroke: {
                    color: '#337ab7',
                    weight: 3
                }
	    	}
		};

	    var mapBoatMarkers = [{
	    	latitude: -13.3782496,
    		longitude: -38.9235562,
    		id: 3
	    },
	    {
	    	latitude: -12.9529238,
    		longitude: -38.505972,
    		id: 4
	    }];

	    var mapLand1Config = {
			center: { latitude: -12.8310925, longitude: -38.5487506 },
	    	zoom: 11,
	    	options: {
	    		scrollwheel: false
	    	},
	    	line: {
	    		id: 1,
	    		path: [{
			    	latitude: -12.9529238,
	        		longitude: -38.505972
			    },{
			    	latitude: -12.9110925,
	        		longitude: -38.3487506
			    }],
			    stroke: {
                    color: '#337ab7',
                    weight: 3
                }
	    	}
		};

		var mapLand1Markers = [{
	    	latitude: -12.9529238,
	        longitude: -38.505972,
    		id: 5
	    },
	    {
	    	latitude: -12.9110925,
    		longitude: -38.3487506,
    		id: 6
	    }];

	    var mapLand2Config = {
			center: { latitude: -12.8010925, longitude: -38.7687506 },
	    	zoom: 10,
	    	options: {
	    		scrollwheel: false
	    	},
	    	line: {
	    		id: 1,
	    		path: [{
			    	latitude: -12.9267606,
	        		longitude: -38.6225475
			    },
			    {
			    	latitude: -12.9529238,
	        		longitude: -38.505972
			    }],
			    stroke: {
                    color: '#337ab7',
                    weight: 3
                }
	    	}
		};

		var mapLand2Markers = [{
	    	latitude: -12.9529238,
	        longitude: -38.505972,
    		id: 7
	    },
	    {
	    	latitude: -12.9267606,
	        longitude: -38.6225475,
    		id: 8
	    }];

	    var mapLand3Config = {
			center: { latitude: -12.8310925, longitude: -39.3587506 },
	    	zoom: 9,
	    	options: {
	    		scrollwheel: false
	    	},
	    	line: {
	    		id: 1,
	    		path: [{
			    	latitude: -13.3730485,
	        		longitude: -39.0721546
			    },
			    {
			    	latitude: -13.0399182,
	        		longitude: -39.0121537
			    },
			    {
			    	latitude: -12.9267606,
	        		longitude: -38.6225475
			    }],
			    stroke: {
                    color: '#337ab7',
                    weight: 3
                }
	    	}
		};

		var mapLand3Markers = [{
	    	latitude: -12.9267606,
	        longitude: -38.6225475,
    		id: 9
	    },
	    {
	    	latitude: -13.3730485,
	        longitude: -39.0721546,
    		id: 10
	    }];

	    var mapLand4Config = {
			center: { latitude: -13.2755496, longitude: -39.1035562 },
	    	zoom: 11,
	    	options: {
	    		scrollwheel: false
	    	},
	    	line: {
	    		id: 1,
	    		path: [{
			    	latitude: -13.3782496,
	        		longitude: -38.9235562
			    },
			    {
			    	latitude: -13.3730485,
	        		longitude: -39.0721546
			    }],
			    stroke: {
                    color: '#337ab7',
                    weight: 3
                }
	    	}
		};

		var mapLand4Markers = [{
	    	latitude: -13.3730485,
	        longitude: -39.0721546,
    		id: 9
	    },
	    {
	    	latitude: -13.3782496,
	        longitude: -38.9235562,
    		id: 10
	    }];

		this.getOptions = function() {
			return options;
		};

		this.getTableHeads = function() {
			return tableHeads;
		};

		this.getTableAxeCompany = function() {
			return tableAxeCompany;
		};

		this.getTableOthersCompanies = function() {
			return tableOthersCompanies;
		};

		this.getTableBoats = function() {
			return tableBoats;
		};

		this.getTableLand = function() {
			return tableLand;
		};

		this.getMapAvionConfig = function() {
			return mapAvionConfig;
		};

		this.getMapAvionMarkers = function() {
			return mapAvionMarkers;
		};

		this.getMapBoatMarkers = function() {
			return mapBoatMarkers;
		};
		
		this.getMapBoatConfig = function() {
			return mapBoatConfig;
		};

		this.getIconsConfig = function(google) {
			return [{
	                icon: {
	                path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
	            },
	            offset: '25px',
	            repeat: '130px'
	        }];
		};

		this.getMapsLandConfig = function() {
			return {
				land1: mapLand1Config,
				land2: mapLand2Config,
				land3: mapLand3Config,
				land4: mapLand4Config
			}
		};

		this.getMapsLandMarkers = function() {
			return {
				land1Markers: mapLand1Markers,
				land2Markers: mapLand2Markers,
				land3Markers: mapLand3Markers,
				land4Markers: mapLand4Markers
			}
		};
	}

	angular.module('howToGet')
		.service('HowToGetService', HowToGetService);
})(window.angular);