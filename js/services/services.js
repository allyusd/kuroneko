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

    function saveStorage(key, value) {
	    window.localStorage[key] = JSON.stringify(value);
	}

	function loadStorage(key) {
	    var value = window.localStorage[key];

	    if (value) {
		    return JSON.parse(value);
	    }

	    return undefined;
	}
	
	this.run = function() {
		console.log(resources.getResources());

		for(var i in resList) {
			var r = res[resList[i]];

			r.modify = 0;
		}

		//res['food'].modify++;
		//res['wood'].modify++;

		res['food'].modify = res['food'].modify - people.amount * 0.05;

		for(var i in resList) {
			var r = res[resList[i]];

			r.amount += r.modify;
		}

		saveStorage('resources', res);
		
		timer = $timeout(gamecore.run, tick);
	}

	this.getPeople = function() {
		return people;
	}

	this.addPeople = function() {
		if (res['food'].amount >= 50) {
			people.amount++;
			res['food'].amount -= 50;
		}
	}

	this.findfood = function() {
		res['food'].amount++;
	}

	this.findwood = function() {
		res['wood'].amount++;
	}

	var res = loadStorage('resources');

	if(!res)
	{
		res = resources.getResources();
	} else {
		resources.setResources(res);
	}
	
	var resList = resources.getResourcesList();
	var people = {};
	people.amount = 0;
	
	var timer = $timeout(this.run, tick);
}]);