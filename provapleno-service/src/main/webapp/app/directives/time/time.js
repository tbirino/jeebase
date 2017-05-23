'use strict';
angular.module('pocJEE').directive('time', function () {
    return {
        restrict: 'E',
        require: 'ngModel',
        replace:true,
        scope: {
            datetype: '@?datetype'
        },
        templateUrl: 'directives/time/time.html',
        link: function (scope, element, attrs) {
            
            scope.datetype = "time";
        
        }
        
    };
});