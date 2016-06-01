(function(angular){
	'use strict';
	
	function HomeController($scope, $window, uiGmapGoogleMapApi) {
		/*var date = new Date(),
			options = {
			    timeZone: 'America/Fortaleza',
			    year: 'numeric', month: 'numeric', day: 'numeric',
			    hour: 'numeric', minute: 'numeric', second: 'numeric',
			},
		   formatter = new Intl.DateTimeFormat([], options),
		   localDate = new Date(formatter.format(date)),
		   minutes = localDate.getMinutes().length === 1 ? '0'+localDate.getMinutes() : localDate.getMinutes();

		$scope.localHour = localDate.getHours() + ':' + minutes;*/

		function changeBackgroundPosition() {
			if($window.innerWidth > 1200) {
		    	$('.home-photo-background').height(450);
		    	$('.angular-google-map-container').height(450);
		    }
		    else {
		    	$('.home-photo-background').height(350);
		    	$('.angular-google-map-container').height(350);
		    }
		}

		changeBackgroundPosition();
	    $(window).resize(function() {
	    	changeBackgroundPosition();
	    });

	    uiGmapGoogleMapApi.then(function(maps) {
	    	$scope.map = { 
		    	center: { latitude: -13.3782496, longitude: -38.9235562 },
		    	zoom: 9,
		    	options: {
		    		scrollwheel: false
		    	}
		    };

		    $scope.marker = [{
		    	latitude: -13.3782496,
        		longitude: -38.9235562,
        		id: 1
		    }];

			$scope.htmlReady();
    	});
	}

	angular.module('home', ['uiGmapgoogle-maps'])
		.controller('HomeController', HomeController);
})(window.angular);