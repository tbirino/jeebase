'use strict';
angular.module('pocJEE').directive('text', function () {
    return {
        restrict: 'E',
        replace:true,
        require:'ngModel',
        scope: {
            model: '=ngModel',
            validate: '=?required',
        },
        templateUrl: 'directives/text/text.html',
        
        link: function (scope , element , attrs){

            if(attrs.hasOwnProperty("required")){
                scope.validate = true;
            }

        }
    }
});
