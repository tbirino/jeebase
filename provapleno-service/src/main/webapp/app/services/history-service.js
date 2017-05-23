'use strict';

angular.module('pocJEE').service('$history', [ '$rootScope', '$state', function($rootScope, $state) {

    this.reset = function(){
        /*
        {
            state: 
            params: 
        }

        */
        this.history = [];
        this.current = -1;
    }

    this.history = [];
    this.current = -1;

    this.log = function(){
        console.log( this.history );
        console.log( this.current );
    };
    this.add = function ( state ){
        //this.history.push( angular.copy(state) );
        this.history.push( state );
        //console.log( this.history[this.current] );
        ++this.current;
    };
    this.prev = function(){
        --this.current;
        if( this.current > -1 ){
            //console.log( this.history[this.current] );
            $state.go( this.history[this.current].state.name, this.history[this.current].params );
        }        
    }  

    this.hasVisited = function( stateName ){
        for( var i in this.history ){
            if( this.history[i].state.name == stateName ){
                return i;
            }
        }
        return -1;
    }
    this.useCache = function( stateParams ){
        return stateParams.useCache||false;
    }

    this.goto = function( i ){
        //console.log(i);
        $state.go( this.history[i].state.name, this.history[i].params );
        this.current = i;
    }

    this.next = function(){
        ++this.current;
        console.log( "AWEAWE" );
        if( this.current < this.history.length ){
            $state.go( this.history[this.current].state.name, this.history[this.current].params );
        }
    }

} ] );


angular.module('pocJEE').run([ '$rootScope', '$history', function( $rootScope, $history ){
  
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
        //console.log("State Change: transition begins!");
        //console.log( toParams );
        //console.log( toState );
        //console.log( "Use cache: "+ $history.useCache( toParams ) );
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams ){ 
        //console.log("State Change: State change success!");
        //console.log( { state: toState, params: toParams } );

        //$history.add( { state: toState, params: toParams } );
        
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){ 
        //console.log("State Change: Error!");
    });

    $rootScope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams){ 
        //console.log("State Change: State not found!");
    });

    $rootScope.$on('$viewContentLoading', function(event, viewConfig){ 
        //console.log("View Load: the view is loaded, and DOM rendered!");
    });

    $rootScope.$on('$viewcontentLoaded', function(event, viewConfig){ 
        //console.log("View Load: the view is loaded, and DOM rendered!");
    });


}]);   