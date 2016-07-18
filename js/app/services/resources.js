'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('resources', [function() {
	var self = this;
	
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
		self.resources[name] = createResource(name, sort);
	}

	// public function
	self.setResources = function(res) {
		self.resources = res;
	}

	self.getResources = function() {
		return self.resources;
	}

	self.dataReset = function() {
		self.resources = {};
		addResources('soul', 1);
		addResources('imp', 2);
		addResources('land', 3);
	}
	
	// init
	self.dataReset();
}]);