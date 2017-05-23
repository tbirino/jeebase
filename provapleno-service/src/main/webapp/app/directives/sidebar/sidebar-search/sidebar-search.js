'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

 angular.module('pocJEE').directive('sidebarSearch',function() {
  return {
    templateUrl:'directives/sidebar/sidebar-search/sidebar-search.html',
    restrict: 'E',
    replace: true,
    scope: {
    },
    controller:function($scope){
      $scope.selectedMenu = 'home';
    }
  }
});
