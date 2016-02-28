'use strict';
const request = require('request');

const disgameClient = module.exports;

require('./utils/scopes').call(disgameClient);
require('./utils/sign').call(disgameClient);
require('./apis/applications').call(disgameClient);
require('./apis/characters').call(disgameClient);
require('./apis/classes').call(disgameClient);
require('./apis/races').call(disgameClient);
require('./apis/users').call(disgameClient);


disgameClient.connect = (apiKey, secret, options) => {
    this.apiKey = apiKey;
    this.secret = secret;
    options = options || {};
    this.apiVer = options.apiVer || 1;
    this.url = 'https://mighty-fortress-21458.herokuapp.com/api/v' + this.apiVer;
    this.request = request.defaults({ headers: { authorization: this.apiKey}, json: true});
    this.getMe((err, me) => {
        if (err) { throw err; }
        this.me = me;
    });
};