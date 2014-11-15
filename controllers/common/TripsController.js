appMain.controller('TripsController', function ($scope, httQ, accountService, appConstants) {
    var publicTripsUrl = appConstants.apiUrl + "/api/trips";
    $scope.userData = accountService.userData;
    $scope.isPrivate = true;

    httQ.get(publicTripsUrl)
        .then(function (data) {
           $scope.latestTrips = data;
        });
});