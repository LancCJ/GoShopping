/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Platform
} from 'react-native';

import Main from './main/Main'

export default class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Main/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:Platform.OS==='ios'? 20: 0,
        flex: 1
    }
});

