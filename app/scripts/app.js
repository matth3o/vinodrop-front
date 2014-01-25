'use strict';

angular.module('VinoDropFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'VinoDropApp.modules.wine'
])
  .config([
        '$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/wine/partials/wine-list-tpl.html',
        controller: 'WineListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
