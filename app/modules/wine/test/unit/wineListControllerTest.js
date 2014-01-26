'use strict';

describe('wine module', function () {
    beforeEach(module('vinoDropApp.modules.wine'));

    var $httpBackend;

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');

        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    }));

    describe('list controller', function () {
        var $scope,
            $controller,
            $ctrl,
            expectedWines;

        beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope').$new();
            $controller = $injector.get('$controller');
            $ctrl = $controller('wineListCtrl', {$scope: $scope});

            expectedWines = [
                {
                    id: 'c5b24dd33138474ab6f18e5a9824c262'
                },
                {
                    id: '9a2faba06e0b428384de97de66291a00'
                }
            ];

//            $httpBackend
//                .whenGET($config.servers.gravityws.url + '/projects')
//                .respond(200, expectedProjects);
        }));

        it('should retrieve 2 wines', function () {
//            $httpBackend.expectGET($config.servers.gravityws.url + '/projects');

            expect($scope.wines.length).toBe(2);

//            $httpBackend.flush();

//            expect($scope.projects.length).toBe(3);
//            expect($scope.projects[0]).toEqualData(expectedProjects[0]);
//            expect($scope.projects[1]).toEqualData(expectedProjects[1]);
//            expect($scope.projects[2]).toEqualData(expectedProjects[2]);
        });

    });
});