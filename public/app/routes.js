'use strict';


angular.module('smartMath')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/index', {
                templateUrl: 'app/components/index/indexView.html',
                controller: 'indexController'
            })
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController'
            })
            .when('/user', {
                templateUrl: 'app/components/user/userView.html',
                controller: 'userController'
            })
            .otherwise({redirectTo: '/indexx'});

        $locationProvider.html5Mode(true);
    }]);