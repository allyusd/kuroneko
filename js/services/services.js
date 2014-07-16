'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  value('tick', '100');
  
var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('gamecore', ['$timeout', 'tick', 'storage', 'resources', function($timeout, tick, storage, resources){
	var gamecore = this;
	
    this.sayHello = function() {
        return "Hello, World!"
    };

	this.run = function() {
		console.log(resources.getResources());

		resList.forEach(function(item) {
		    var r = res.get(item);

			r.modify = 0;
		});

		//res['food'].modify++;
		//res['wood'].modify++;

		res.get('food').modify = res.get('food').modify - res.get('people').amount * 0.05;
		res.get('food').modify = res.get('food').modify - res.get('farmer').amount * 0.05;

		res.get('food').modify = res.get('food').modify + res.get('farmer').amount * 0.1;

		resList.forEach(function(item) {
			var r = res.get(item);

			r.amount += r.modify;
			if (r.amount < 0) {
				r.amount = 0;
			}
		});

		storage.saveStorage('resources', res);
		
		timer = $timeout(gamecore.run, tick);
	}

	this.dataReset = function() {
		resources.dataReset();
		res = resources.getResources();
		storage.saveStorage('resources', res);
	}

	var res = storage.loadStorage('resources');

	if(!res)
	{
		res = resources.getResources();
	} else {
		resources.setResources(res);
	}
	
	var resList = resources.getResourcesList();
	
	var timer = $timeout(this.run, tick);
}]);