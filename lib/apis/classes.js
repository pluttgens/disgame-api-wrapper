'use strict';

module.exports = function() {
    this.getClasses = (params) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/classes',
                    method: 'GET',
                    qs: params
                });
            });
    };
};