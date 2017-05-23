angular.module('pocJEE').factory('WizardControll', ['$state', function($state){
    return function($wizard){
        var self = angular.extend(this,$wizard);        

        self.current = function(){
            var cur = -1;
            angular.forEach( $wizard.steps, function(state, key){
                if( state.status.indexOf('active') != -1 ){
                    cur = key;
                }
            });
            return cur;
        }
        self.isValid = function(success){
            var current = self.current();

            if( current != -1 && $wizard.steps[current].validate && typeof(self.validate) == 'function' ){
                return self.validate(success);                
            }
            return success();
        }
        self.goNext = function(callback){
            if( !self.isLast() ){
                var current = self.current();            

                if( current != -1 ){
                    self.desactivate(current);
                    self.complete(current);                 
                }

                self.activate(++current);
                if( self.isDisabled(current) ){
                    self.enable(current);
                } 
                $state.go( $wizard.steps[current].name, $state.params ).then( function(){
                    if( callback ){
                        callback();
                    }
                });             
            }
        }
        self.goPrevious = function(callback){
            if( !self.isFirst() ){
                var current = self.current();

                self.desactivate(current);
                self.uncomplete(current);                   

                self.activate(--current);                   

                $state.go( $wizard.steps[current].name, $state.params ).then( function(){
                    if( callback ){
                        callback();
                    }
                });
            }
        }
        self.next = function(){
            return self.isValid(self.goNext);
        }
        self.previous = function(){
            return self.goPrevious();
        }
        self.goTo = function(stateIndex){
            var current = self.current();

            if( stateIndex > current ){
                return self.isValid( function(){
                    self.goNext( function(){ self.goTo(stateIndex) } );                    
                } );          
            }else if( stateIndex < current ){
                return self.goPrevious( function(){
                    self.goTo(stateIndex);
                });
            }
        }        
        self.isFirst = function(){
            return self.current() == 0;
        }
        self.isLast = function(){
            return self.current() == $wizard.steps.length-1;
        }
        self.isActive = function(stateIndex){
            return $wizard.steps[stateIndex].status.indexOf( 'active' ) != -1;
        }
        self.isComplete = function(stateIndex){
            return $wizard.steps[stateIndex].status.indexOf('complete') != -1;
        }
        self.isDisabled = function(stateIndex){
            return $wizard.steps[stateIndex].status.indexOf('disabled') != -1;
        }
        self.desactivate = function(stateIndex){
            var index = $wizard.steps[stateIndex].status.indexOf('active');
            if( index != -1 ){
                $wizard.steps[stateIndex].status.splice(index, 1);
            }           
        }
        self.activate = function(stateIndex){
            if( $wizard.steps[stateIndex].status.indexOf('active') == -1 ){
                $wizard.steps[stateIndex].status.push('active');
            }           
        }
        self.enable = function(stateIndex){
            var index = $wizard.steps[stateIndex].status.indexOf('disabled');
            if( index != -1 ){
                $wizard.steps[stateIndex].status.splice(index, 1);
            }
        }
        self.disable = function(stateIndex){
            if( $wizard.steps[stateIndex].status.indexOf('disabled') == -1 ){
                $wizard.steps[stateIndex].status.push('disabled');
            }
        }
        self.complete = function(stateIndex){
            if( $wizard.steps[stateIndex].status.indexOf('complete') == -1 ){
                $wizard.steps[stateIndex].status.push('complete');
            }           
        }
        self.uncomplete = function(stateIndex){
            var index = $wizard.steps[stateIndex].status.indexOf('complete');
            if( index != -1 ){
                $wizard.steps[stateIndex].status.splice(index, 1);
            }           
        }
        self.check = function($stateName){
            if( self.current() == -1 ){
                $state.go( $wizard.steps[0].name );
                self.activate(0);
            }else if( $state.is( $wizard.controllState ) ){
                $state.go( $wizard.steps[0].name );
            }           
        }
        self.size = function(){
            return $wizard.steps.length;
        }

        return self;
    };
}]);