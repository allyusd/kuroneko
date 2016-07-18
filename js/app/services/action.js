'use strict';

/* Services */

var myApp = angular.module('myApp.services');

//service style, probably the simplest one
myApp.service('action', ['resources', function(resources){
	var self = this;

	var actionList = {};
	
	// private funcion
	function createAction(name, sort, text, tip, click) {
		var action = {};
		
		action.name = name;
		action.sort = sort;
		action.text = text;
		action.tip = tip;
		action.click = click;
	
		actionList[name] = action;
	}

	function calNeedResources(base, amount, mul) {
		var result = base;

		if (amount > 0)
		{
			result = base * Math.pow(mul, amount);
		}

		return result.toFixed(2);
	}

	function getTips(base, mul, resourcesname) {
		return 'need ' + calNeedResources(base, self.resources[resourcesname].amount, mul) + ' soul';
	}

	// public function
	self.init = function() {
		self.resources = resources.getResources();

		createAction('findsoul', 1, 'Find Soul', 'get soul', function() {
			self.resources['soul'].amount++;
		});

		createAction('getImp', 2, 'Get Imp', getTips(10, 1.2, 'imp'), function() {
			var need = calNeedResources(10, self.resources['imp'].amount, 1.2);

			if (self.resources['soul'].amount >= need) {
				self.resources['imp'].amount++;
				self.resources['soul'].amount -= need;

				actionList['getImp'].tip = getTips(10, 1.2, 'imp');
			}
		});

		createAction('getLand', 3, 'Get Land', getTips(100, 1.2, 'land'), function() {
			var need = calNeedResources(10, self.resources['land'].amount, 1.2);

			if (self.resources['soul'].amount >= need) {
				self.resources['land'].amount++;
				self.resources['soul'].amount -= need;

				actionList['getLand'].tip = getTips(10, 1.2, 'land');
			}
		});
	}

	self.getActionList = function() {
		return actionList;
	}
	
	// init

}]);