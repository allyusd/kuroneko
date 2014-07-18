'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('action', ['resources', function(resources){
	var self = this;

	var actionList = [];
	
	// private funcion
	function createAction(name, sort, tip, click) {
		var action = {};
		
		action.name = name;
		action.sort = sort;
		action.tip = tip;
		action.click = click;
	
		actionList.push(action);
	}

	// public function
	self.getActionList = function() {
		return actionList;
	}
	
	// init
	var res = resources.getResources();

	createAction('addPeople', 1, 'need 50 food', function() {
		if (res['food'].amount >= 50) {
			res['people'].amount++;
			res['food'].amount -= 50;
		}
	});

	createAction('findfood', 2, 'will get a food', function() {
		res['food'].amount++;
	});

	createAction('findwood', 3, 'will get a wood', function() {
		res['wood'].amount++;
	});

	createAction('addFarmer', 4, 'need a people', function() {
		if (res['people'].amount >= 1) {
			res['farmer'].amount++;
			res['people'].amount -= 1;
		}
	});
}]);