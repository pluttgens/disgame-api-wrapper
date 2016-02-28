'use strict';

module.exports = function() {
    this.getRaces = (params) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/races',
                    method: 'GET',
                    qs: params
                });
            });
    };
};