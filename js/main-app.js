'use strict';

(function(angular) {
    angular.module('mainApp', [
        'ngRoute',
        'pascalprecht.translate', 
        'seo',
        'i18n',
        'uiGmapgoogle-maps',
        'inview',
        'languages',
        'home',
        'menu',
        'howToGet',
        'hotels',
        'thingsToDo'
    ])
    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDMlNOTz98gOX5e2uU90hpl8Cl0Sp3q_g4',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
    })
    .config(function($translateProvider, enTextProvider, frTextProvider, ptTextProvider) {
            $translateProvider.translations('en', enTextProvider.$get());
            $translateProvider.translations('fr', frTextProvider.$get());
            $translateProvider.translations('pt', ptTextProvider.$get());
            $translateProvider.preferredLanguage('en');
        })
    .config(function($routeProvider) {
        $routeProvider.when('/hotels-pousadas-restaurants-info', {
            templateUrl: 'js/home/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/hotels-pousadas-restaurantes-information', {
            templateUrl: 'js/home/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/hoteis-pousadas-restaurantes-informacao', {
            templateUrl: 'js/home/home.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/how-to-get-here', {
            templateUrl: 'js/howToGet/how-to-get.html'
        }); 
        $routeProvider.when('/comment-venir', {
            templateUrl: 'js/howToGet/how-to-get.html'
        }); 
        $routeProvider.when('/como-chegar', {
            templateUrl: 'js/howToGet/how-to-get.html'
        }); 

        $routeProvider.when('/hotels-and-pousadas', {
            templateUrl: 'js/hotels/hotels.html'
        }); 
        $routeProvider.when('/hotels-et-pousadas', {
            templateUrl: 'js/hotels/hotels.html'
        }); 
        $routeProvider.when('/hoteis-e-pousadas', {
            templateUrl: 'js/hotels/hotels.html'
        }); 

        $routeProvider.when('/things-to-do', {
            templateUrl: 'js/thingsToDo/things-to-do.html',
        }); 
        $routeProvider.when('/quoi-faire', {
            templateUrl: 'js/thingsToDo/things-to-do.html'
        }); 
        $routeProvider.when('/o-que-fazer', {
            templateUrl: 'js/thingsToDo/things-to-do.html'
        }); 

        $routeProvider.otherwise({
            redirectTo: '/hotels-pousadas-restaurants-info'
        });
    })
    .factory('jQuery', [
        '$window',
        function ($window) {
            return $window.jQuery;
        }
    ])
    .factory('lodash', [
        '$window',
        function ($window) {
            return $window.lodash;
        }
    ]);
})(window.angular);