'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('resources', ['$timeout', 'tick', function($timeout, tick){
	var resources = {};
		
	this.createResource = function(name) {
		var res = {};
		
		res.name = name;
		res.amount = 0;
	
		return res;
	}
		
	this.getResources = function() {
		return resources;
	}
	
	
	
	resources['food'] = this.createResource('food');
	resources['wood'] = this.createResource('wood');
	
}]);