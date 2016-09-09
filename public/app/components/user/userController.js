app.controller('userController', function ($scope, $http) {

    $scope.userdata = null;
    $scope.error = null;

    $http.get('userData.json')
        .success(function (data) {
            $scope.userdata = data;
        });
});