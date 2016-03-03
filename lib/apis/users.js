'use strict';

module.exports = function() {
    this.getUser = (discordId) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/users/' + discordId,
                    method: 'GET'
                });
            });
    };
    this.getUsers = (params) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/users',
                    method: 'GET',
                    qs: params
                });
            });
    };
    this.registerUser = (discordId) => {
        return this._checkScope('game_client')
            .then(() => this._sign({discord_id: discordId}))
            .then((sig) => {
                return this.request({
                    url: this.url + '/users/',
                    method: 'POST',
                    body: {discord_id: discordId},
                    headers: {'X-signature': sig}
                });
            })
            .catch({statusCode: 403}, err => Promise.reject(err.response.body.error));
    };
    this.unregisterUser = (discordId) => {
        return this._checkScope('game_client')
            .then(() => this._sign({discord_id: discordId}))
            .then((sig) => {
                return this.request({
                    url: this.url + '/users/' + discordId,
                    method: 'DELETE',
                    headers: {'X-signature': sig}
                });
            });
    };
};