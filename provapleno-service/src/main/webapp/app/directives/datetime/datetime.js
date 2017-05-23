'use strict';
angular.module('pocJEE').directive('datetime', function () {
    return {
        restrict: 'E',
        require: 'ngModel',
        replace:true,
        scope: {
            datetype: '@?datetype'
        },
        templateUrl: 'directives/datetime/datetime.html',
        link: function (scope, element, attrs) {
            
            scope.datetype = "datetime-local";
        
        }
        
    };
});