'use strict';

module.exports = function() {
    this.getClasses = (params, callback) => {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/classes',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
};