'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('resources', ['$timeout', 'tick', function($timeout, tick){
	var self = this;

	var resources = {};
	var resourcesList = [];
	
	// private funcion
	function createResource(name) {
		var res = {};
		
		res.name = name;
		res.amount = 0;
		res.modify = 0;
	
		return res;
	}
	
	function addResources(name) {
		resourcesList.push(name);
		resources[name] = createResource(name);
	}

	// public function
	this.getResources = function() {
		return resources;
	}

	this.getResourcesList = function() {
		return resourcesList;
	}	
	
	// init
	addResources('food');
	addResources('wood');
}]);