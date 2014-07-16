'use strict';

/* Factory */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.factory('localstorage', [function(){
	var self = this;

	// private member

	// public member
	self.namespace = '';
	
	// private function

	// public function
    self.saveStorage = function(key, value) {
	    window.localStorage[self.namespace + '.' + key] = JSON.stringify(value);
	}

	self.loadStorage = function(key) {
	    var value = window.localStorage[self.namespace + '.' + key];

	    if (value) {
		    return JSON.parse(value);
	    }

	    return undefined;
	}
	
	// init

	return self;
}]);