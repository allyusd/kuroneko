'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  value('tick', '100');
  
var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('gamecore', ['$timeout', 'tick', 'resources', function($timeout, tick, resources){
	var gamecore = this;
	
    this.sayHello = function() {
        return "Hello, World!"
    };
	
	this.run = function() {
		console.log(resources.getResources());

		for(var i in resList) {
			var r = res[resList[i]];

			r.modify = 0;
		}

		res['food'].modify++;
		res['wood'].modify++;

		res['food'].modify = res['food'].modify - people.amount;

		for(var i in resList) {
			var r = res[resList[i]];

			r.amount += r.modify;
		}
		
		timer = $timeout(gamecore.run, tick);
	}

	this.getPeople = function() {
		return people;
	}

	this.addPeople = function() {
		people.amount++;
	}
	
	var res = resources.getResources();
	var resList = resources.getResourcesList();
	var people = {};
	people.amount = 0;
	
	var timer = $timeout(this.run, tick);
}]);