'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  value('tickInterval', '100');
  
var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('gamecore', ['$timeout', 'tickInterval', 'storage', 'resources', function($timeout, tickInterval, storage, resources){
	var self = this;

	// privaite member

	// public member
	self.tick = 0;

	//private function
	
	// public function
    self.sayHello = function() {
        return "Hello, World!"
    };

	self.run = function() {
		// console.log(resources.getResources());

		$.each(res, function(index, item) {
			item.modify = 0;
		});

		//res['food'].modify++;
		//res['wood'].modify++;

		res['food'].modify = res['food'].modify - res['people'].amount * 0.05;
		res['food'].modify = res['food'].modify - res['farmer'].amount * 0.05;

		res['food'].modify = res['food'].modify + res['farmer'].amount * 0.1;

		$.each(res, function(index, item) {
			item.amount += item.modify;
			if (item.amount < 0) {
				item.amount = 0;
			}
		});

		storage.saveStorage('resources', res);

		self.tick++;
		
		timer = $timeout(self.run, tickInterval);
	}

	self.dataReset = function() {
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
	
	var timer = $timeout(self.run, tickInterval);
}]);