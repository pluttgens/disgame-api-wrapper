'use strict';
const Promise = require('bluebird');

module.exports = function () {
    this._checkScope = (scope) => {
        if (this.me.scopes.indexOf(scope) < 0) return Promise.reject('You do not have the required scope for this operation : ' + scope);
        return Promise.resolve();
    };
};