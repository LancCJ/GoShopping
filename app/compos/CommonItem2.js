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
export default class CommonItem2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri:this.props.iconName1}} style={{resizeMode:'contain',width:width*0.36,height:height*0.1*2/4}}/>
                <Image source={{uri:this.props.iconName2}} style={{resizeMode:'contain',width:width*0.36,height:height*0.1*2/4}}/>
                <Text>{this.props.title1}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text>{this.props.title2}</Text>
                    <Text style={{backgroundColor:'yellow',color:'red'}}>{this.props.title3}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:width/2,
        height:height*0.1*2,
        backgroundColor: "#FFFFFF",
        justifyContent:'center',
        alignItems:'center'
    }
});
