'use strict';

/* Services */
  
var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('gamecore', ['$timeout', 'tickInterval', 'storage', 'resources', 'action', function($timeout, tickInterval, storage, resources, action){
	var self = this;

	// privaite member

	// public member
	self.tick = 0;

	//private function
	function init() {
		self.resources = storage.loadStorage('resources');

		if(!self.resources)
		{
			self.resources = resources.getResources();
		} else {
			resources.setResources(self.resources);
		}

		self.actions = action.getActionList();
		action.init();
		
		self.timer = $timeout(self.run, tickInterval);
	}
	
	// public function
    self.sayHello = function() {
        return "Hello, World!"
    };

	self.run = function() {
		// console.log(resources.getResources());

		$.each(self.resources, function(index, item) {
			item.modify = 0;
		});

		//self.resources['food'].modify++;
		//self.resources['wood'].modify++;

		//self.resources['food'].modify = self.resources['food'].modify - self.resources['people'].amount * 0.05;
		//self.resources['food'].modify = self.resources['food'].modify - self.resources['farmer'].amount * 0.05;

		//self.resources['food'].modify = self.resources['food'].modify + self.resources['farmer'].amount * 0.1;
		self.resources['soul'].modify = self.resources['soul'].modify + self.resources['imp'].amount * 0.01;
		self.resources['soul'].modify = self.resources['soul'].modify + self.resources['land'].amount * 0.02;

		$.each(self.resources, function(index, item) {
			item.amount += item.modify;
			if (item.amount < 0) {
				item.amount = 0;
			}
		});

		storage.saveStorage('resources', self.resources);

		self.tick++;
		
		self.timer = $timeout(self.run, tickInterval);
	}

	self.dataReset = function() {
		resources.dataReset();
		self.resources = resources.getResources();
		storage.saveStorage('resources', self.resources);
	}

	// init
	init();
}]);