'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope', 'gamecore', function($scope, gamecore) {
  	$scope.gamecore = gamecore;
  }]).
  controller('MyCtrl1', ['$scope', 'gamecore', 'resources', 'action', function($scope, gamecore, resources, action) {
  	$scope.resources = resources.getResources();
  	$scope.actions = action.getActionList();
  	$scope.dataReset = gamecore.dataReset;
  }]).
  controller('MyCtrl2', [function() {
  
  }]);