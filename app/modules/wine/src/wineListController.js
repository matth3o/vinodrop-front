'use strict';

angular
    .module('VinoDropApp.modules.wine.controller.list', [
        'ui.bootstrap'
    ])
    .controller('WineListCtrl', ['$scope', function ($scope) {
        $scope.wines = [
            {id: 1},
            {id: 2}
        ];
    }]);
