'use strict'; 

(function(angular){
	function MenuController($scope, $rootScope, $translate, enText, frText, ptText) {
		var self = this,
			traslatedTexts = {
	            en: enText, 
	            fr: frText, 
	            pt: ptText
	        };

        this.traslatedText = traslatedTexts.en;
        this.isMenuOpened = false;

		$rootScope.currentLanguage = 'en';

		$scope.$watch('currentLanguage', function(o, n) {
            self.menuItems = [
                {
                    url: self.traslatedText['menu.url.home'],
                    text: self.traslatedText['menu.home'],
                    id: 'home'
                },
                {
                    url: self.traslatedText['menu.url.howToGet'],
                    text: self.traslatedText['menu.howToGet'],
                    id: 'howToGet',
                },
                {
                    url: self.traslatedText['menu.url.hotels'],
                    text: self.traslatedText['menu.hotels'],
                    id: 'hotels'
                },
                {
                    url: self.traslatedText['menu.url.thingsToDo'],
                    text: self.traslatedText['menu.thingsToDo'],
                    id: 'thingsToDo'
                }
            ];
        });

		this.changeLanguage = function(lang) {
			$translate.use(lang);
			$rootScope.currentLanguage = lang;
			self.traslatedText = traslatedTexts[lang];
		};

        this.onMenuToggle = function() {
            self.isMenuOpened = !self.isMenuOpened;
        };
	}

	angular.module('menu')
		.controller('MenuController', MenuController);
})(window.angular);