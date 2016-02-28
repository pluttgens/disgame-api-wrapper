'use strict';
const Promise = require('bluebird');

module.exports = function () {
    this._checkScope = (scope) => {
        return new Promise((resolve, reject) => {
            if (this.me.scopes.indexOf(scope) < 0) reject('You do not have the required scope for this operation : ' + scope);
            resolve();
        });
    };
};