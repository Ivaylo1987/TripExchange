'use strict';
appMain.controller('CreateTripController', function ($scope, httQ, appConstants, notifier, $location) {
    var citiesPublicUrl = appConstants.apiUrl + "api/cities";
    var createTripUrl = appConstants.apiUrl + "api/trips";

    httQ.get(citiesPublicUrl)
        .then(function (data) {
            $scope.cities = data;
        });

    $scope.createTrip = function createTrip() {
        httQ.post(createTripUrl, $scope.trip, {'Content-Type': 'application/json'})
            .then(function (data) {
                notifier.success("New trip created!");
                $location.path('/trips');
            }, function (error) {
                notifier.error(error.message);
            });
    }
});