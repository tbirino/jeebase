'use strict';

angular.module('pocJEE.resource').controller('ResourceTesteWizardController',
    ['$scope', '$state', 'AlertsManager', '$previousState',
    function ($scope, $state, AlertsManager, $previousState ) {
        var self = this;
        /*
		{
			name: '',
			status: [],
			text: '',
			description: ''
		}
        */
        self.wizard = {
            states: [
                {
                    name: 'app.private.notifications.wizard.step1',
                    status: ['disabled'],
                    text: 'Step1',
                    description: '',
                    onEnter: function(){},
                    onExit: function(){}
                },
                {
                    name: 'app.private.notifications.wizard.step2',
                    status: ['disabled'],
                    text: 'Step2',
                    description: '',
                    onEnter: function(){},
                    onExit: function(){}
                }
            ],
            pre: 'app.private.notifications.wizard'           
        };

        




        $scope.pessoa = { tipo: '' };
        $scope.wizard = {};

        $scope.wizard.gravar = function(){
            console.log( "FROM wizardController" );
        }


        self.current = function(){
        	var cur = -1;
        	angular.forEach( self.wizard.states, function(state, key){
        		if( state.status.indexOf('active') !== -1 ){
        			cur = key;
        		}
        	});
        	return cur;
        }
        self.goNext = function(changeStatus){
        	if( !self.isLast() ){
        		var current = self.current();
        		changeStatus = changeStatus || true;
        		
        		if( changeStatus ){
        			self.desactivate(current);
        			self.complete(current);        			
        		}
        		self.activate(++current);
        		if( self.isDisabled(current) && changeStatus ){
        			self.enable(current);
        		}        		

        		$state.go( self.wizard.states[current].name );
        	}
        }
        self.goPrevious = function(changeStatus){
        	if( !self.isFirst() ){
        		var current = self.current();
        		changeStatus = changeStatus || true;

        		if( changeStatus ){
        			self.desactivate(current);
	        		self.uncomplete(current);	        		
        		}
        		self.activate(--current);        		 	

        		$state.go( self.wizard.states[current].name );
        	}
        }
        self.goTo = function(stateIndex, changeStatus){
        	var current = self.current();
        	changeStatus = changeStatus || true;

        	if( stateIndex > current ){
        		do {
        			self.goNext(changeStatus);
        		}while( stateIndex > self.current());        		
        	}else if( stateIndex < current ){
    			do{
    				self.goPrevious(changeStatus);
    			}while( stateIndex < self.current() );
        	}
        }        
        self.isFirst = function(){
        	return self.current() == 0;
        }
        self.isLast = function(){
        	return self.current() == self.wizard.states.length-1;
        }
        self.isActive = function(stateIndex){
        	return self.wizard.states[stateIndex].status.indexOf( 'active' ) != -1;
        }
        self.isComplete = function(stateIndex){
        	return self.wizard.states[stateIndex].status.indexOf('complete') != -1;
        }
        self.isDisabled = function(stateIndex){
        	return self.wizard.states[stateIndex].status.indexOf('disabled') != -1;
        }
        self.desactivate = function(stateIndex){
        	var index = self.wizard.states[stateIndex].status.indexOf('active');
        	if( index != -1 ){
        		self.wizard.states[stateIndex].status.splice(index, 1);
        	}			
        }
        self.activate = function(stateIndex){
        	if( self.wizard.states[stateIndex].status.indexOf('active') == -1 ){
        		self.wizard.states[stateIndex].status.push('active');
        	}        	
        }
        self.enable = function(stateIndex){
        	var index = self.wizard.states[stateIndex].status.indexOf('disabled');
        	if( index != -1 ){
        		self.wizard.states[stateIndex].status.splice(index, 1);
        	}
        }
        self.disable = function(stateIndex){
        	if( self.state[stateIndex].status.indexOf('disabled') == -1 ){
        		self.wizard.states[stateIndex].status.push('disabled');
        	}
        }
        self.complete = function(stateIndex){
        	if( self.wizard.states[stateIndex].status.indexOf('complete') == -1 ){
        		self.wizard.states[stateIndex].status.push('complete');
        	}        	
        }
        self.uncomplete = function(stateIndex){
        	var index = self.wizard.states[stateIndex].status.indexOf('complete');
        	if( index != -1 ){
        		self.wizard.states[stateIndex].status.splice(index, 1);
        	}			
        }
        self.go = function(stateIndex){
        	self.enable(stateIndex);
        	self.activate(stateIndex);
        	$state.go(self.wizard.states[stateIndex].name);
        }

    }]
);