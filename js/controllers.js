'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'gamecore', 'resources', function($scope, gamecore, resources) {
  	$scope.people = gamecore.getPeople();
  	$scope.addPeople = gamecore.addPeople;
	$scope.resources = resources.getResources();
	$scope.findfood = gamecore.findfood;
	$scope.findwood = gamecore.findwood;
  }])
  .controller('MyCtrl2', [function() {
  
  }]);