'use strict';

module.exports = function(Application) {
    Application.prototype.getRaces = function (params, callback) {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/races',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
};