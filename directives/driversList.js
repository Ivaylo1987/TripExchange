'use strict';
appMain.directive('driversList', function () {
    return{
        restricted: 'A',
        templateUrl: 'templates/directiveTemplates/driversList.html',
        scope: false
    }
});