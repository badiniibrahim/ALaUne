/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from "./app/app";
import { AppRegistry } from "react-native";

export default class ALaUne extends Component {
    render() {
        return (
            <App />
        );
    }
}


AppRegistry.registerComponent('ALaUne', () => ALaUne);
