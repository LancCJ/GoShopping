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

/**
 *
 */
export default class CommonItem1 extends Component {
    render() {
        return (
            <View style={[styles.container,{width:this.props.width,paddingLeft:width*0.04}]}>
                <View>
                    <Text style={{color:this.props.mainTitleColor,fontSize:height*0.02}}>{this.props.mainTitle}</Text>
                    <Text style={{color:'#5E6977',fontSize:height*0.015}}>{this.props.subTitle}</Text>
                </View>
                <View>
                    <Image source={{uri:this.props.iconName}} style={{resizeMode:'contain',width:width*0.25,height:height*0.1,paddingRight:width*0.04}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:height*0.1,
        backgroundColor: "#FFFFFF",
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    }
});