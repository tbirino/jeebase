'use strict';
angular.module('pocJEE').directive('cep', function () {
    return {
        restrict: 'E',
        replace:true,
        require:'ngModel',
        scope: {
            idinput: '@?idinput',
            model: '=ngModel',
            nome:"@?name",
            placeholder: '@?',
            edit: '=',
            desabilitar: '=?disabled',
            leitura: '=?readonly',
            validate: '=?required',
            divclass:'@?divclass',
            inputclass:'@?inputclass'
        },
        templateUrl: 'directives/cep/cep.html',

        link: function (scope , element , attrs){

            if(attrs.hasOwnProperty("required")){
                scope.validate = true;
            }
             if(attrs.hasOwnProperty("readonly")){
                scope.leitura = "readonly";
            }
            if(attrs.hasOwnProperty("disabled")){
                scope.desabilitar = "disabled";
            }

        }
    }
});
