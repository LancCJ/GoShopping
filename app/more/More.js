/**
 * Created by lanccj on 17/1/19.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {Icon} from 'react-native-elements'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

import CommonCell from '../compos/CommonCell'

/**
 *
 */
export default class More extends Component {
    _onPressSettingButton(){
        Alert.alert('点击设置按钮')
    }
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <View style={[styles.topIconStyles,{paddingLeft:width*0.04,opacity:0}]}>
                    <View>
                        <Icon type='ionicon' color={'#FFFFFF'} name='ios-settings-outline' size={30} />
                    </View>
                </View>
                {/**中间**/}
                <View>
                    <Text style={styles.topTextStyles}>更多</Text>
                </View>
                {/**右边**/}
                <View style={[styles.topIconStyles,{paddingRight:width*0.04}]}>
                    <TouchableOpacity onPress={this._onPressSettingButton}>
                        <View>
                            <Icon type='ionicon' color={'#FFFFFF'} name='ios-settings-outline' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='sacn'     name='扫一扫' type="button"/>
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell name='省流量模式' type="switch"/>
                        <CommonCell id='notice'   name='消息提醒' type="button"/>
                        <CommonCell id='clean'    name='清空缓存' type="textButton" text="14MB"/>
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='feddback' name='意见反馈' type="button"/>
                        <CommonCell id='nethelp'  name='网络诊断' type="button"/>
                        <CommonCell id='works'    name='我要应聘' type="button"/>
                        <CommonCell id='payhelp'  name='支付帮助' type="button"/>
                        <CommonCell id='about'    name='程序关于' type="button"/>
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='apps'     name='精品应用' type="button"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0EBF3"
    },
    navBarStyle:{
        height:44,
        backgroundColor:'#FA5600',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    topTextStyles:{
        fontSize:20,
        color:'#FFFFFF'
    },
    topIconStyles:{
        height:44,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
