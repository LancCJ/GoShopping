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
    ScrollView
} from 'react-native';

import {Icon} from 'react-native-elements'

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

import CommonCell from '../compos/CommonCell'
import CommonRow from '../compos/CommonRow'


/**
 *
 */
export default class Mine extends Component {
    renderTopUpView(){
        return (
            <View style={[styles.TopUpViewStyle,{flexDirection:'row'}]}>
                <View style={[{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
                    <Image source={{uri:'see'}} style={{marginLeft:width*0.04,width:width*0.15,height:width*0.15,borderRadius:width*0.15/2}}/>
                    <View style={[{marginLeft:width*0.02,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}]}>
                        <Text style={[{color:'#FFFFFF',fontSize:20}]}>陈健</Text>
                        <Image source={{uri:'avatar_vip'}} style={{marginLeft:width*0.02,width:width*0.05,height:width*0.05}}/>
                    </View>
                </View>
                <View style={[{marginRight:width*0.04,justifyContent:'center',alignItems:'center'}]}>
                    <Icon type='ionicon' color={'#F0EBF3'} name='ios-arrow-forward-outline' size={30} />
                </View>
            </View>
        )
    }
    renderTopDownView(){
        return (
            <View style={[styles.TopDownViewStyle,{flexDirection:'row'}]}>
                <View style={styles.TopDownTextViewStyle}>
                    <Text style={styles.TopDownTextStyle}>100</Text>
                    <Text style={styles.TopDownTextStyle}>飞机票</Text>
                </View>
                <View style={[styles.TopDownTextViewStyle,{borderLeftWidth:0.5,borderLeftColor:'#DEDEDE',borderRightWidth:0.5,borderRightColor:'#DEDEDE'}]}>
                    <Text style={styles.TopDownTextStyle}>12</Text>
                    <Text style={styles.TopDownTextStyle}>评价</Text>
                </View>
                <View style={styles.TopDownTextViewStyle}>
                    <Text style={styles.TopDownTextStyle}>50</Text>
                    <Text style={styles.TopDownTextStyle}>收藏</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderTopUpView()}
                {this.renderTopDownView()}
                <ScrollView>
                    <View style={[{marginTop:height*0}]}>
                        <CommonCell id='orders'  name='我的订单' type="textButton" text="查看全部订单" iconName="collect" iconType="local" />
                        <CommonRow/>
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='wallet'   name='我的钱包' type="textButton" text="账户余额:¥100" iconName="draft" iconType="local" />
                        <CommonCell id='cards'    name='卡券'    type="textButton" text="0张" iconName="like" iconType="local" />
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='notice'   name='积分商城' type="button" iconName="card" iconType="local" />
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='Recommend' name='今日推荐' type="button" iconName="new_friend" iconType="local" />
                    </View>

                    <View style={[{marginTop:height*0.02}]}>
                        <CommonCell id='cooperation'     name='我要合作' type="textButton" text="加入我们,轻松赚钱" iconName="pay" iconType="local" />
                    </View>
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
    TopUpViewStyle: {
        width: width,
        backgroundColor: "#FA5600",
        height:64,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    TopDownViewStyle: {
        width: width,
        backgroundColor: "#F4765B",
        height:45,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5
    },
    TopDownTextViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TopDownTextStyle:{
        color:'#FFFFFF'
    }
});
