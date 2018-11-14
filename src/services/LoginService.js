/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';

type Props = {};
type State = {
};

export default class LoginService {

    _buffer = require('buffer');

    async login(username: string, password: string) {
        let b = new this._buffer.Buffer(`${username}:${password}`);
        const encodedAuth = b.toString('base64');
        const headers = {'Authorization': `Basic ${encodedAuth}`};

        return await fetch('https://api.github.com/user', {
            headers: headers
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        }).then((json) => {
            return {'user': json, 'authHeader': headers};
        }).catch((error) => {
            return error;
        });
    }
}