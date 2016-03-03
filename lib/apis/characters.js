'use strict';

module.exports = function() {
    this.createCharacter = (userId, params) => {
        return this._checkScope('game_client')
            .then(() => this._sign(params))
            .then((sig) => {
                return this.request({
                    url: this.url + '/users/' + userId + '/characters',
                    method: 'POST',
                    body: params,
                    headers: {'X-signature': sig}
                });
            });
    };
    this.getCharacter = (characterId) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/characters/' + characterId,
                    method: 'GET'
                });
            });
    };
    this.getCharacters = (params) =>{
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/characters',
                    method: 'GET',
                    qs: params
                });
            });
    };
    this.getUserCharacters = (discordId, params) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/users/' + discordId + '/characters',
                    method: 'GET',
                    qs: params
                });
            });
    };
    this.removeCharacter = (characterId) => {
        return this._checkScope('game_client')
            .then(() => {
                return this.request({
                    url: this.url + '/characters/' + characterId,
                    method: 'DELETE'
                });
            });
    }
};