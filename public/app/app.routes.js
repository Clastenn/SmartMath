app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/homeView.html',
            controller: "homeController"
        })
        .when('/user', {
            templateUrl: 'app/components/user/userView.html',
            controller: "userController"
        });
        //.otherwise({redirectTo: '/'});

    $locationProvider
    //.html5Mode(true);
        .hashPrefix('!');

}]);