'use strict';

module.exports = function() {
    this.getApplications = (params, callback) => {
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
    this.getMe = (callback) => {
        this.request({
            url: this.url + '/@me',
            method: 'GET'
        }, (err, res, body) => {
            callback(err, body);
        });
    };
};