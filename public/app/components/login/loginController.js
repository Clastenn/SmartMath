'use strict';

angular.module('smartMath')
    .controller('loginController', function ($scope, $http) {
        $http.get('/api/users').then(function (response) {
            $scope.users = response.data;
        });
    });