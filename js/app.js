'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.services',
  'myApp.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
run(['gamecore', function(gamecore) {
	console.log(gamecore.sayHello());

	Array.prototype.get = function(name) {
	    for (var i=0, len=this.length; i<len; i++) {
	        if (typeof this[i] != "object") continue;
	        if (this[i].name === name) return this[i];
	    }

	    return undefined;
	};
}]);
