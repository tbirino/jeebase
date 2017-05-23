'use strict';
angular.module('pocJEE').directive('date', function () {
    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        scope:{
            datetype: '@?datetype'
        },
        templateUrl: 'directives/date/date.html',
        link: function (scope, element, attrs) {

            if(attrs.datetype === '' || attrs.datetype === undefined){
                
                if (attrs.hasOwnProperty('datetime') || attrs.datetype === 'datetime-local' ) {
                    scope.datetype = "datetime-local";
                } else if (attrs.hasOwnProperty('time') || attrs.datetype === 'time')  {
                    scope.datetype="time";
                } else {
                    scope.datetype = "date";
                }
            }
            
        }
        
    };
});