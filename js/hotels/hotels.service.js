(function(angular) {
    'use strict';

    function hotelsService() {
        this.getHotels = function() {
            return $http.get('http://farinelliwebdevelopment.com/mdsp_be/get-mdsp-hotels.php', {});
        };
    }

    angular.module('hotels')
        .service('hotelsService', hotelsService);

})(window.angular);