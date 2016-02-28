'use strict';
const request = require('request');

function Application(apiKey, secret, options) {
    this.apiKey = apiKey;
    this.secret = secret;
    options = options || {};
    this.apiVer = options.apiVer || 1;
    this.url = 'https://mighty-fortress-21458.herokuapp.com/api/v' + this.apiVer;
    this.request = request.defaults({ headers: { authorization: this.apiKey}, json: true});
    this.getMe((err, me) => {
        if (err) { throw err; }
        console.log(err ||me);
        this.me = me;
        this.registerUser('141332760542314497', (err, user) => {
            console.log(err || user);
        })
    });
}

require('./utils/scopes')(Application);
require('./utils/sign')(Application);
require('./apis/applications')(Application);
require('./apis/characters')(Application);
require('./apis/classes')(Application);
require('./apis/races')(Application);
require('./apis/users')(Application);
module.exports = Application;