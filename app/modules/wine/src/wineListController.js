'use strict';

angular
    .module('vinoDropApp.modules.wine.controller.list', [
        'ui.bootstrap',
        'pascalprecht.translate'
    ])
    .controller('wineListCtrl', ['$scope', function ($scope) {
        $scope.wines = [
            {id: 1},
            {id: 2}
        ];
    }]);
