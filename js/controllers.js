'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'gamecore', 'resources', function($scope, gamecore, resources) {
  	$scope.addPeople = gamecore.addPeople;
	$scope.resources = resources.getResources();
	$scope.findfood = gamecore.findfood;
	$scope.findwood = gamecore.findwood;
	$scope.addFarmer = gamecore.addFarmer;
	$scope.dataReset = gamecore.dataReset;
  }])
  .controller('MyCtrl2', [function() {
  
  }]);