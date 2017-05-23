
angular.module('pocAngularMaterial').factory('httpMessageHandleInterceptor', ['$q', '$log', '$rootScope', function($q, $log, $rootScope) {  

   return {
    // optional method
    'request': function(config) {
      // do something on success
      return config;
    },

    // optional method
   'requestError': function(rejection) {
     
      return $q.reject(rejection);
    },



    // optional method
    'response': function(response) {
      // do something on success
      return response;
    },

    // optional method
   'responseError': function(rejection) {
      //console.log( rejection );

      var exceptions = rejection && rejection.data.erros || [];
      if( exceptions.length ){
        for( var i in exceptions ){

          $rootScope.$broadcast('responseErrorEvent', { type: exceptions[i].type, msg: exceptions[i].msg });
        }
      }

      
      
      return $q.reject(rejection);
    }
  };
   
}]);