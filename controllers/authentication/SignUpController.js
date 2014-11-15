'use strict';

appMain.controller('SignUpController', function ($scope, $location, $timeout, accountService, notifier) {
    $scope.showCarInput = false;

    $scope.registration = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    if (accountService.userData.isAuth) {
        accountService.logOutUser();
    }

    $scope.signUp = function signUpFunction() {

        if ($scope.registration.email === "") {
            notifier.error("Please enter valid Email address!");
            return;
        }

        if ($scope.registration.password.length < 3) {
            notifier.error("Password connot be less than 3 characters!");
            return;
        }

        if ($scope.registration.confirmPassword.length < 3 || $scope.registration.confirmPassword !== $scope.registration.password) {
            notifier.error("Password confirmation does not match!");
            return;
        }

        accountService.registerUser($scope.registration)
            .then(function () {
                notifier.success("Registered successfully, redirecting to home page...");
                startTimer();
            }, function (error) {
//                var errors = [];
//
//                for (var key in response.ModelState) {
//                    for (var i = 0; i < response.ModelState[key].length; i++) {
//                        errors.push(response.ModelState[key][i]);
//                    }
//                }
//
//                $scope.formMessage = "Registration Failed: " + errors.join(', ');
                notifier.error(error.message);
            });
    };

    function startTimer() {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/');
        }, 2000);
    };
});