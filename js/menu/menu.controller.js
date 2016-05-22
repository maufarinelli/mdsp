'use strict'; 

(function(angular){
	function MenuController($scope, $rootScope, $location, $translate, enText, frText, ptText) {
		var self = this,
			traslatedTexts = {
	            en: enText, 
	            fr: frText, 
	            pt: ptText
	        };

        function setMenuItems() {
            self.menuItems = [
                {
                    url: self.traslatedText['menu.url.home'],
                    text: self.traslatedText['menu.home'],
                    id: 'home',
                    active: self.isMenuItemActive(self.traslatedText['menu.url.home'])
                },
                {
                    url: self.traslatedText['menu.url.howToGet'],
                    text: self.traslatedText['menu.howToGet'],
                    id: 'howToGet',
                    active: self.isMenuItemActive(self.traslatedText['menu.url.howToGet'])
                },
                {
                    url: self.traslatedText['menu.url.hotels'],
                    text: self.traslatedText['menu.hotels'],
                    id: 'hotels',
                    active: self.isMenuItemActive(self.traslatedText['menu.url.hotels'])
                },
                {
                    url: self.traslatedText['menu.url.thingsToDo'],
                    text: self.traslatedText['menu.thingsToDo'],
                    id: 'thingsToDo',
                    active: self.isMenuItemActive(self.traslatedText['menu.url.thingsToDo'])
                }
            ];
        }

        this.traslatedText = traslatedTexts.en;
        this.isMenuOpened = false;

		$rootScope.currentLanguage = 'en';

        $rootScope.$on('$locationChangeSuccess', function(oldValue, newValue) {
            if(oldValue !== newValue) {
                setMenuItems();
            }
        });

		$scope.$watch('currentLanguage', function(oldValue, newValue) {
            if(oldValue !== newValue) {
                var menuItemActiveIndex = _.findIndex(self.menuItems, function(menuItem) {
                    return menuItem.active;
                });
                setMenuItems();
                $location.url(self.menuItems[menuItemActiveIndex].url.substring(2));
            }
            else {
                setMenuItems();
            }

        });

		this.changeLanguage = function(lang) {
			$translate.use(lang);
			$rootScope.currentLanguage = lang;
			self.traslatedText = traslatedTexts[lang];
		};

        this.onMenuToggle = function() {
            self.isMenuOpened = !self.isMenuOpened;
        };

        this.onMenuItemClick = function(menuItem) {

        };

        this.isMenuItemActive = function(url) {
            return $location.url() === url.substring(2);
        }

	}

	angular.module('menu')
		.controller('MenuController', MenuController);
})(window.angular);