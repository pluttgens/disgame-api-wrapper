'use strict';

module.exports = function() {
    this.getApplications = (params) => {
        return this._checkScope('admin')
            .then(() => {
                return this.request({
                    url: this.url + '/applications',
                    method: 'GET',
                    qs: params
                });
            });
    };
};