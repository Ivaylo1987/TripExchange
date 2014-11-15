'use strict';
appMain.controller('MainPageController', function ($scope, $location, accountService, appConstants) {
    $scope.userData = accountService.userData;

    $scope.author = appConstants.author;
    $scope.authorLink = appConstants.authorLink;
    $scope.poweredBy = appConstants.poweredBy;

    $scope.logOut = function () {
        accountService.logOutUser();
        $location.path('/home');
    };
});