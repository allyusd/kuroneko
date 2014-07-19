'use strict';

/* Factory */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.factory('localstorage', [function(){
	return LocalStorage;
}]);
