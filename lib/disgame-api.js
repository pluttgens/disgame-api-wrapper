'use strict';
const rp = require('request-promise');

const disgameClient = module.exports;

disgameClient.connect = (apiKey, secret, options) => {
    this.apiKey = apiKey;
    this.secret = secret;
    options = options || {};
    this.apiVer = options.apiVer || 1;
    this.url = 'https://mighty-fortress-21458.herokuapp.com/api/v' + this.apiVer;
    this.request = rp.defaults({ headers: { authorization: this.apiKey}, json: true});
    this.getMe = () => {
        return this.request({
            url: this.url + '/@me',
            method: 'GET'
        });
    };
    return this.getMe()
                .then((me) => {
                    this.me = me;
                    require('./utils/scopes').call(disgameClient);
                    require('./utils/sign').call(disgameClient);
                    require('./apis/applications').call(disgameClient);
                    require('./apis/characters').call(disgameClient);
                    require('./apis/classes').call(disgameClient);
                    require('./apis/races').call(disgameClient);
                    require('./apis/users').call(disgameClient);
                    return me;
                });
};