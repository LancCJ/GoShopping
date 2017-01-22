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
    TouchableOpacity
} from 'react-native';

import {Icon} from 'react-native-elements'

import Test from '../Test'

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
                <View>
                    <TouchableOpacity onPress={this._onPressLocationButton}>
                        <Text style={styles.topTextStyles}>苏州</Text>
                    </TouchableOpacity>
                </View>
                {/**中间**/}
                <View>
                    <TextInput
                        placeholder="输入商家,品类,商圈"
                        placeholderTextColor="#DEDEDE"
                        style={styles.topInputStyle}
                    />
                </View>
                {/**右边**/}
                <View style={styles.topIconStyles}>
                    <TouchableOpacity onPress={this._onPressNotificationButton}>
                        <View>
                            <Icon type='ionicon' color={'#FFFFFF'} name='ios-notifications-outline' size={30} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._onPressScanButton}>
                        <View>
                            <Icon type='ionicon' color={'#FFFFFF'} name='ios-qr-scanner' size={30} />
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
                <Text
                    style={[{color:"red"}]}
                    onPress={this._pressButton.bind(this)}
                >Home界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    navBarStyle:{
        height:64,
        backgroundColor:'#FA5600',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    topTextStyles:{
        fontSize:20,
        color:'#FFFFFF',
    },
    topInputStyle:{
        width:width*0.7,
        height:44,
        backgroundColor: "#FFFFFF",
        borderRadius:width*0.7/15,
        paddingLeft:width*0.01
    },
    topIconStyles:{
        height:64,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
