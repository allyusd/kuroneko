'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'resources', function($scope, resources) {
	$scope.resources = resources.getResources();
  }])
  .controller('MyCtrl2', [function() {
  
  }]);