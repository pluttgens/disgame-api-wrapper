'use strict';
const crypto = require('crypto');

module.exports = function () {
    this._sign = (params) => {
        return Promise.resolve(() => {
            params = params || {};
            const hmac = crypto.createHmac('sha256', this.secret);
            params.api_key = this.apiKey;
            const keys = [];
            Object.keys(params).forEach(key => keys.push(key));
            keys.sort((a, b) => {
                a = a.toLowerCase(); b = b.toLowerCase();
                if (a < b) {return -1;}
                if (a > b) {return 1;}
                return 0;
            });
            let message = '';
            keys.forEach(key => {
                message += (key+ '=');
                message += (params[key] + '&');
            });
            message = message.substring(0, message.length - 1);
            hmac.update(message);
            return hmac.digest('hex');
        });
    };
};