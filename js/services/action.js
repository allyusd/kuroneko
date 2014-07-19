'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('action', ['resources', function(resources){
	var self = this;

	var actionList = {};
	
	// private funcion
	function createAction(name, sort, text, tip, click) {
		var action = {};
		
		action.name = name;
		action.sort = sort;
		action.text = text;
		action.tip = tip;
		action.click = click;
	
		actionList[name] = action;
	}

	// public function
	self.init = function() {
		self.resources = resources.getResources();

		createAction('findfood', 1, 'Find Food', 'will get a food', function() {
			self.resources['food'].amount++;
		});

		createAction('findwood', 2, 'Find Wood', 'will get a wood', function() {
			self.resources['wood'].amount++;
		});

		createAction('addPeople', 3, 'Add People', 'need 50 food', function() {
			if (self.resources['food'].amount >= 50) {
				self.resources['people'].amount++;
				self.resources['food'].amount -= 50;
			}
		});

		createAction('addFarmer', 4, 'Add Farmer', 'need a people', function() {
			if (self.resources['people'].amount >= 1) {
				self.resources['farmer'].amount++;
				self.resources['people'].amount -= 1;
			}
		});
	}

	self.getActionList = function() {
		return actionList;
	}
	
	// init

}]);