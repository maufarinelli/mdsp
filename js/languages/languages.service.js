(function(angular){
    'use strict';

    function languagesService($rootScope, $translate, enText, frText, ptText) {
        var self = this,
            traslatedTexts = {
            en: enText,
            fr: frText,
            pt: ptText
        };

        $rootScope.currentLanguage = window.localStorage.language ? window.localStorage.language : 'en';
        $translate.use($rootScope.currentLanguage);

        this.changeLanguage = function(lang) {
            $translate.use(lang);
            $rootScope.currentLanguage = lang;
            window.localStorage.language = lang;
        };

        this.getTranslatedText = function() {
            return traslatedTexts[$rootScope.currentLanguage];
        };
    }

    angular.module('languages', [])
        .service('languagesService', languagesService);
})(window.angular);