/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

var Game = require('./js/Game');

export default class recuerdos extends Component {
    render() {
        return (
            <Game />
        );
    }
}

AppRegistry.registerComponent('recuerdos', () => recuerdos);
