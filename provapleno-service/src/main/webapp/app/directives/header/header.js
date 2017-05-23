'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
 angular.module('pocJEE').directive('header',function(){
  return {
    templateUrl : 'directives/header/header.html',
    restrict: 'E',
    replace: true,
  }
});


