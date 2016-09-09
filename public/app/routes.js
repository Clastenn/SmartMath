'use strict';


angular.module('smartMath')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController'
            })
            .when('/user', {
                templateUrl: 'app/components/user/userView.html',
                controller: 'userController'
            })
            .otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(true);
    }]);