'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('storage', ['localstorage', function(localstorage){
	var self = this;

	// private member
	self.storage = new localstorage('kuroneko');

	self.storage = new LocalStorage();

	// public member
	
	// private function

	// public function
    self.saveStorage = function(key, value) {
	    self.storage.saveStorage(key, value);
	}

	self.loadStorage = function(key) {
	    return self.storage.loadStorage(key);
	}
	
	// init
	self.storage.namespace = 'kuroneko'

}]);