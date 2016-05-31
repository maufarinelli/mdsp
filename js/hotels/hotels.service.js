(function(angular) {
    'use strict';

    function hotelsService($http) {
        this.getHotels = function() {
            return $http.get('http://morrodesaopaulo.vacations/mdsp_be/get-mdsp-hotels.php', {});
        };
    }

    angular.module('hotels')
        .service('hotelsService', hotelsService);

})(window.angular);