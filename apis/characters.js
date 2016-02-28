'use strict';

module.exports = function() {
    this.createCharacter = (userId, params, callback) => {
        this._checkScope('game_client')((callback) => {
            const sig = this._sign(params);
            this.request({
                url: this.url + '/users/' + userId + '/characters',
                method: 'POST',
                body: params,
                headers: {'X-signature': sig}
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.getCharacter = (characterId, callback) => {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/characters/' + characterId,
                method: 'GET'
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.getCharacters = (params, callback) =>{
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/characters',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
    this.getUserCharacters = (discordId, params, callback) => {
        this._checkScope('data_api')((callback) => {
            this.request({
                url: this.url + '/users/' + discordId + '/characters',
                method: 'GET',
                qs: params
            }, (err, res, body) => {
                callback(err, body);
            });
        }, callback);
    };
};