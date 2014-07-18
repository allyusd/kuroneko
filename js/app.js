'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.services',
  'myApp.directives',
  'myApp.filters'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "partials/main.html",
      controller: "MainCtrl"
    })
    .state('main.view1', {
      url: "/view1",
      templateUrl: "partials/partial1.html",
      controller: "MyCtrl1"
    })
    .state('main.view2', {
      url: "/view2",
      templateUrl: "partials/partial2.html",
      controller: "MyCtrl2"
    });
}]).
run(['gamecore', function(gamecore) {
	console.log(gamecore.sayHello());

}]);
