'use strict';

module.exports = function (Application) {
    Application.prototype._checkScope = function (scope) {
        return (request, callback) => {
            if (this.me.scopes.indexOf(scope) < 0) { return callback('You do not have the required scope for this operation : ' + scope);}
            request(callback);
        }
    }
};