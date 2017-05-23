angular.module('pocAngularMaterial').service('AlertsManager', function($rootScope, $timeout, $mdToast, $animate) {  
  self.alerts = {};
  self.timeout = 0;
  self.isShowing = false;

  self = this;

  if( !self.alerts ){
    self.alerts = {};
  }

  $rootScope.$on('responseErrorEvent', function(event, data) {
    $rootScope.alerts.add(data);
  });

  this.closeById = function(id){
    if( self.alerts[id] ){
      delete self.alerts[id];
    }    
  }

  this.checkForAlerts = function(){
    if(Object.keys(self.alerts).length > 0 ){
      self.show(Object.keys(self.alerts)[0]);
    }
  }

  this.show = function(id){
    self.isShowing = true;
    $mdToast.show({
      controller: 'AlertController',
      templateUrl: 'directives/alerts/alerts.html',
      hideDelay: self.timeout,
      position: 'top left right',
      locals: { alert: self.alerts[id] }
    }).then( function(response){
        self.closeAlert(id, response);
      }, function(response){
        self.closeAlert(id, response);
      }
    );
  }

  this.closeAlert = function(id, response){
    self.isShowing = false;
    self.closeById(id);
    self.checkForAlerts();
  }

  

  this.add = function(obj) {  
    obj.id = String(new Date().getTime());
    obj.timeout = obj.timeout || self.timeout; 


    self.alerts[obj.id] = obj;

    if( !self.isShowing ){
      self.show(obj.id);
    }
  };

  this.addError = function(message){
    self.add( { type: 'danger', msg: message } );
  };
  this.addWarning = function(message){
    self.add( { type: 'warning', msg: message } );
  };
  this.addSuccess = function(message){
   self.add( { type: 'success', msg: message } );
  }
  this.addInfo = function(message){
    self.add( { type: 'info', msg: message } );
  }



  this.clear = function() {
    for(var x in $rootScope.alerts) {
     delete $rootScope.alerts[x];
    }
  };

  this.get = function() {
    return $rootScope.alerts;
  }
        
});