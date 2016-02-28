'use strict';

module.exports = function() {
    this.getMyUsers = (params, callback) => {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/@me/users',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.getUser = (discordId, callback) => {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/users/' + discordId,
                method: 'GET'
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.getUsers = (params, callback) => {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/users',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.registerUser = (discordId, callback) => {
        this._checkScope('game_client')((callback) => {
            const sig = this._sign({discord_id: discordId});
            this.request({
                url: this.url + '/@me/users/',
                method: 'POST',
                body: {discord_id: discordId},
                headers: {'X-signature': sig}
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.unregisterUser = (discordId, callback) => {
        this._checkScope('game_client')((callback) => {
            const sig = this._sign({discord_id: discordId});
            this.request({
                url: this.url + '/@me/users/',
                method: 'DELETE',
                body: {discord_id: discordId},
                headers: {'X-signature': sig}
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
};