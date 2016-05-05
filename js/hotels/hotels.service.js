(function(angular) {
    'use strict';

    function hotelsService($http) {
        this.getHotels = function() {
            //return $http.get('http://farinelliwebdevelopment.com/mdsp_be/get-mdsp-hotels.php', {});
            return $http.get('js/hotels/hotels.json', {}); //TODO, remove before go prod
        };
    }

    angular.module('hotels')
        .service('hotelsService', hotelsService);

})(window.angular);