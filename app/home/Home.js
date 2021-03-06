/**
 * Created by lanccj on 17/1/19.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ListView,
    Alert,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

import {Icon} from 'react-native-elements'

import Test from '../StatusBarDemo'
import HomeTopView from './HomeTopView'
import CommonView1 from '../compos/CommonView1'
import CommonView2 from '../compos/CommonView2'


var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *首页界面
 */
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: '测试',
                component: Test,
            })
        }
    }
    _onPressLocationButton(){
        Alert.alert('点击切换位置')
    }
    _onPressNotificationButton(){
        Alert.alert('点击通知按钮')
    }
    _onPressScanButton(){
        Alert.alert('点击扫一扫按钮')
    }
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                {/**左边**/}
                <View style={[{paddingLeft:width*0.01}]}>
                    <TouchableOpacity onPress={this._onPressLocationButton}>
                        <Text style={styles.topTextStyles}>苏州</Text>
                    </TouchableOpacity>
                </View>
                {/**中间**/}
                <View>
                    <TextInput
                        placeholder="输入商家,品类,商圈"
                        placeholderTextColor="#DEDEDE"
                        underlineColorAndroid='transparent'
                        style={styles.topInputStyle}
                    />
                </View>
                {/**右边**/}
                <View style={[styles.topIconStyles,{paddingRight:width*0.01}]}>
                    <TouchableOpacity onPress={this._onPressNotificationButton}>
                        <View style={[{paddingRight:width*0.04}]}>
                            <Icon type='ionicon' color={'#FFFFFF'} name='ios-notifications-outline' size={25} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressScanButton}>
                        <View>
                            <Icon type='ionicon' color={'#FFFFFF'} name='ios-qr-scanner' size={25} />
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
                    <HomeTopView/>
                    <CommonView1
                        popTopHome={(data)=>Alert.alert(data)}
                    />
                    <CommonView2/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEDF3"
    },
    navBarStyle:{
        height:height*0.08,
        backgroundColor:'#FA5600',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    topTextStyles:{
        fontSize:15,
        color:'#FFFFFF',
    },
    topInputStyle:{
        width:width*0.6,
        height:height*0.07,
        backgroundColor: "#FFFFFF",
        borderRadius:width*0.7/20,
        paddingLeft:width*0.02,
        fontSize:15
    },
    topIconStyles:{
        height:height*0.05,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
