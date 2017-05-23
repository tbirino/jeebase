'use strict';

angular.module('pocJEE.resource').controller('ResourceTesteStep1Controller',
    ['$scope', '$state', 'AlertsManager', '$previousState',
    function ($scope, $state, AlertsManager, $previousState ) {
        var self = this;

        $scope.wizard.gravar = function(wizardCtrl){
            alert('Escolha um tipo de pessoa!');
        }
    }]
);