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
    ScrollView,
    Platform
} from 'react-native';

import {Icon} from 'react-native-elements'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

import ShopListView from './ShopListView'

var home_d5=require('../../LocalData/XMG_Home_D5.json')

/**
 *商家界面
 */
export default class Shop extends Component {
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                <View style={[styles.topIconStyles,{paddingLeft:width*0.04}]}>
                    <View>
                        <Icon type='ionicon' color={'#FFFFFF'} name='ios-pin-outline' size={30} />
                    </View>
                </View>
                {/**中间**/}
                <View>
                    <Text style={styles.topTextStyles}>商家</Text>
                </View>
                {/**右边**/}
                <View style={[styles.topIconStyles,{paddingRight:width*0.04}]}>
                    <TouchableOpacity onPress={this._onPressSettingButton}>
                        <View>
                            <Icon type='ionicon' color={'#FFFFFF'} name='ios-search' size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        var data=home_d5.data
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                    <View style={styles.TopViewStyle}>
                            <View style={styles.groupBuyingStyle}>
                                <View style={{width:width/3,borderRadius:width/6,height:height*0.05,backgroundColor:'#04A496',flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                                    <Image source={{uri:'icon_tabbar_homepage_selected'}} style={{width:width*0.06,height:width*0.06,resizeMode:'contain'}}/>
                                    <Text style={{color:'#FFFFFF'}}>团购限时抢</Text>
                                </View>
                                <View style={styles.groupBuyingTimeStyle}>
                                    <Text style={{color:'#FFFFFF'}}>距离21点结束</Text>
                                    <Text style={{color:'#FFFFFF'}}>01:08:36</Text>
                                </View>
                            </View>
                    </View>

                    <ScrollView
                    >
                        <ShopListView dataArr={data}/>
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
        height:height*0.08,
        backgroundColor:'#FA5600',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    topTextStyles:{
        fontSize:20,
        color:'#FFFFFF'
    },
    TopViewStyle:{
        backgroundColor: "#08B9A7"
    },
    groupBuyingStyle:{
        height:height*0.08,
        width:width,
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row",
        backgroundColor:'#08B9A7',
        paddingLeft:width*0.04,
        paddingRight:width*0.04
    },
    groupBuyingTimeStyle:{
        flexDirection:"row"
    }
});
