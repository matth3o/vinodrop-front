'use strict';

angular.module('vinoDropFrontApp', [
        'ngResource',
        'ngRoute',
        'LocalStorageModule',
        'pascalprecht.translate',
        'vinoDropApp.modules.wine'
    ])
    .config([
        '$routeProvider',
        '$translateProvider',
        'tmhDynamicLocaleProvider',
        'localStorageServiceProvider',
        function ($routeProvider, $translateProvider, tmhDynamicLocaleProvider, localStorageServiceProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'modules/wine/partials/wine-list-tpl.html',
                    controller: 'wineListCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $translateProvider.useStaticFilesLoader({
                prefix: 'lang/',
                suffix: '.json'
            });

            tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

            localStorageServiceProvider.setPrefix('');

        }])
    .run(['$translate', 'tmhDynamicLocale', 'localStorageService', function ($translate, tmhDynamicLocale, localStorageService) {
        // navigator.userlanguage (IE only)
        var locale = localStorageService.get('lang') || navigator.language || navigator.userLanguage;
        localStorageService.add('lang', locale);

        $translate.uses(locale.toLowerCase());
        tmhDynamicLocale.set(locale.toLowerCase());
    }]);
