'use strict';

appMain.controller('LoginController', function ($scope, $location, accountService, notifier) {
    $scope.loginData = {
        userName: '',
        password: ''
    };

    if (accountService.userData.isAuth === true) {
        accountService.logOutUser();
    }

    $scope.login = function login() {
        var loginData = $scope.loginData;

        if (loginData.email == '' || loginData.password == '') {
            notifier.error("Invalid username or bad password");
            return;
        }

        accountService.loginUser(loginData)
            .then(function (data) {
                $location.path('/');
                notifier.success("You are logged in!");
            }, function (error) {
                notifier.error(error.error_description);
            });
    }
});