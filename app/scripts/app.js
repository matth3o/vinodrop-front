'use strict';

angular.module('vinoDropFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'vinoDropApp.modules.wine'
])
  .config([
        '$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/wine/partials/wine-list-tpl.html',
        controller: 'wineListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
