/**
 * Created by lanccj on 17/1/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

import CommonItem1 from './CommonItem1'
import CommonItem2 from './CommonItem2'

/**
 *
 */
export default class CommonView2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <CommonItem1 width={width} mainTitle="最高立减25" subTitle="快速立减减减" mainTitleColor="#F6B144" iconName="nsj"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <CommonItem1 width={width/2} mainTitle="千万红包" subTitle="快速立减减减" mainTitleColor="#F6B144" iconName="nsj"/>
                    <CommonItem1 width={width/2} mainTitle="最高立减25" subTitle="快速立减减减" mainTitleColor="#F6B144" iconName="nsj"/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <CommonItem1 width={width/2} mainTitle="鲜花一折" subTitle="撩妹更easy" mainTitleColor="#F6B144" iconName="nsj"/>
                    <CommonItem1 width={width/2} mainTitle="最高立减25" subTitle="快速立减减减" mainTitleColor="#F6B144" iconName="nsj"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:height*0.02,
        width:width,
        height:height*0.1*3,
        backgroundColor: "#FFFFFF"
    }
});
