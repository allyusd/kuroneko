'use strict';

/**
 * LocalStorage.
 *
 * @constructor
 * @param {string} namespace
 * @export
 */
function LocalStorage(namespace) {
  /**
   * @type {string}
   * @export
   */
  this.namespace = namespace;
};

/**
 * @param {string} key
 * @param {object} value
 * @export
 */
LocalStorage.prototype.saveStorage = function(key, value) {
	window.localStorage[this.namespace + '.' + key] = JSON.stringify(value);
};

/**
 * @param {string} key
 * @export
 */
LocalStorage.prototype.loadStorage = function(key) {
	var value = window.localStorage[this.namespace + '.' + key];

	if (value) {
		return JSON.parse(value);
	}

	return undefined;
};