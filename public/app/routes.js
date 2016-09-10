'use strict';


angular.module('smartMath')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                redirectTo: '/index'
            })
            .when('/index', {
                templateUrl: 'app/components/index/indexView.html',
                controller: 'indexController'
            })
            .when('/login', {
                templateUrl: 'app/components/login/loginView.html',
                controller: 'loginController'
            })
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController'
            })
            .when('/user', {
                templateUrl: 'app/components/user/userView.html',
                controller: 'userController'
            })
            .when('/404', {
                templateUrl: 'app/components/errors/404.html'
            })
            .otherwise({
                redirectTo: '/404'
            });

        $locationProvider.html5Mode(true);
    }]);