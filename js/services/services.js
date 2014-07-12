'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  value('tick', '100');
  
var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('gamecore', ['$timeout', 'tick', function($timeout, tick){
	var gamecore = this;

    this.sayHello = function() {
        return "Hello, World!"
    };
	
	this.run = function() {
		console.log('hi');
		
		timer = $timeout(gamecore.run, tick);
	}
	
	var timer = $timeout(this.run, tick);
}]);