'use strict';

var appMain = angular.module('appMain', ['ngRoute', 'LocalStorageModule']);

appMain.value('toastr', toastr);

appMain.constant("appConstants", {
    // Paths
    templatesFolder: "templates",
    apiUrl: "http://localhost:1337/",

    // General
    author: "Ivaylo Hristov",
    authorLink: "http://github.com/Ivaylo1987",
    poweredBy: "AngularJS and Bootstrap"
});

appMain.config(function ($routeProvider, appConstants) {

    $routeProvider.when("/", {
        templateUrl: appConstants.templatesFolder + "/home.html",
        controller: "HomeController"
    });

    $routeProvider.when("/drivers", {
        templateUrl: appConstants.templatesFolder + "/drivers.html",
        controller: "DriversController"
    });

    $routeProvider.when("/drivers/:id", {
        templateUrl: appConstants.templatesFolder + "/driverDetails.html",
        controller: "DriversController"
    });

    $routeProvider.when("/trips", {
        templateUrl: appConstants.templatesFolder + "/trips.html",
        controller: "TripsController"
    });

    // not implemented
    $routeProvider.when("/trips/:id", {
        templateUrl: appConstants.templatesFolder + "/tripDetails.html",
        controller: "TripsController"
    });

    $routeProvider.when("/trips/create", {
        templateUrl: appConstants.templatesFolder + "/createTrip.html",
        controller: "CreateTripController"
    });

    $routeProvider.when("/signup", {
        templateUrl: appConstants.templatesFolder + "/signUp.html",
        controller: "SignUpController"
    });

    $routeProvider.when("/login", {
        templateUrl: appConstants.templatesFolder + "/login.html",
        controller: "LoginController"
    });

    $routeProvider.when("/unauthorized", {
        templateUrl: appConstants.templatesFolder + "/unauthorized.html"
    });

    $routeProvider.otherwise({ redirectTo: "/" });
});

appMain.config(function ($httpProvider) {
    $httpProvider.interceptors.push('interceptorService');
});

appMain.run(function (accountService) {
    accountService.checkIdentity();
});