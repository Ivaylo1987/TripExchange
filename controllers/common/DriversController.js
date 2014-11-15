'use strict';
appMain.controller('DriversController', function ($scope, httQ, appConstants, $routeParams) {
    var publicDriversUrl = appConstants.apiUrl + "api/drivers";
    $scope.filterData = {
        page: 1,
        userName: ""
    };

    var driverId = $routeParams.id;
    httQ.get(publicDriversUrl + '/'+ driverId)
        .then(function (data) {
            $scope.driverDetails = data;
            $scope.latestTrips = data.trips;
        });

    httQ.get(publicDriversUrl)
        .then(function (data) {
            $scope.topDrivers = data;
        });

    $scope.searchDriver = function(){
        var searchUrl = publicDriversUrl;
        var pageQuery = "?page=" + $scope.filterData.page;

        searchUrl += pageQuery;

        if ($scope.filterData.userName !== '') {
            var userNameQuery = "&username=" + $scope.filterData.userName;
            searchUrl += userNameQuery;
        }

        httQ.get(searchUrl)
            .then(function (data) {
                $scope.topDrivers = data;
            });
    };

    $scope.changePage = function changePageFunc(operator) {
        $scope.filterData.page += operator;

        if ($scope.filterData.page < 1){
            $scope.filterData.page = 1;
        }

        $scope.searchDriver();
    }
});