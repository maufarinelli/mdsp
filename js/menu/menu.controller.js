(function(angular){
    'use strict';

    function MenuController($scope, $rootScope, $location, languagesService) {
		var self = this;

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

        this.traslatedText = languagesService.getTranslatedText();
        this.isMenuOpened = false;

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
            languagesService.changeLanguage(lang);
            self.traslatedText = languagesService.getTranslatedText();
		};

        this.onMenuToggle = function() {
            self.isMenuOpened = !self.isMenuOpened;
        };

        this.isMenuItemActive = function(url) {
            return $location.url() === url.substring(2);
        }

	}

	angular.module('menu')
		.controller('MenuController', MenuController);
})(window.angular);