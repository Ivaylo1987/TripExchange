'use strict';
appMain.controller('HomeController', function ($scope, httQ, appConstants) {
    $scope.isPrivate = false;
    httQ.get(appConstants.apiUrl + "api/stats")
        .then(function (data) {
            $scope.statistics = data;
        });
});
