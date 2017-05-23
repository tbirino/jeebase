angular.module('pocAngularMaterial').controller('AlertController', ['$scope', '$mdToast', '$animate', 'alert', function($scope, $mdToast, $animate, alert) {
    $scope.closeAlert = function(){
        $mdToast.hide('Clicando');
    }
    
    $scope.alert = alert;

}]);