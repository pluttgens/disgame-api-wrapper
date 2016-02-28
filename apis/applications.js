'use strict';

module.exports = function(Application) {
    Application.prototype.getApplications = function (params, callback) {
        this._checkScope('admin')((callback) => {
            this.request({
                url: this.url + '/applications',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    Application.prototype.getMe = function (callback) {
        this.request({
            url: this.url + '/@me',
            method: 'GET',
        }, (err, res, body) => {
            callback(err, body);
        });
    };
};