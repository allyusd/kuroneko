'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('resources', ['$timeout', 'tick', function($timeout, tick){
	var self = this;

	var resourcesList = [];
	
	// private funcion
	function createResource(name, sort) {
		var res = {};
		
		res.name = name;
		res.sort = sort;
		res.amount = 0;
		res.modify = 0;
	
		return res;
	}
	
	function addResources(name, sort) {
		resourcesList.push(name);
		self.resources.push(createResource(name, sort));
	}

	// public function
	this.setResources = function(res) {
		self.resources = res;
	}

	this.getResources = function() {
		return self.resources;
	}

	this.getResourcesList = function() {
		return resourcesList;
	}

	this.dataReset = function() {
		self.resources = [];
		addResources('food', 3);
		addResources('wood', 4);
		addResources('people', 1);
		addResources('farmer', 2);
	}
	
	// init
	self.dataReset();
}]);