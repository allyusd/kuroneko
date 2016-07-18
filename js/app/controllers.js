'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MainCtrl', ['$scope', 'gamecore', function($scope, gamecore) {
  	$scope.gamecore = gamecore;
  }]).
  controller('MyCtrl1', ['$scope', 'gamecore', function($scope, gamecore) {
    $scope.gamecore = gamecore;
    $scope.resources = gamecore.resources;
    $scope.actions = gamecore.actions;
  }]).
  controller('MyCtrl2', ['$scope', 'gamecore', function($scope, gamecore) {
    $scope.gamecore = gamecore;
    $scope.resources = gamecore.resources;
    $scope.actions = gamecore.actions;
  }]);