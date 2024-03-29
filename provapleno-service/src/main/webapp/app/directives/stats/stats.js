'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
 angular.module('pocJEE').directive('stats',function() {
   return {
    templateUrl:'directives/stats/stats.html',
    restrict:'E',
    replace:true,
    scope: {
      'model': '=',
      'comments': '@',
      'number': '@',
      'name': '@',
      'colour': '@',
      'details':'@',
      'type':'@',
      'goto':'@'
    }
  }
});
