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

var home_d4=require('../../LocalData/XMG_Home_D4.json')

/**
 *
 */
export default class CommonView2 extends Component {
    renderDownView(){
        var itemArr=[]
        var downData=home_d4.data
        for(i=0;i<downData.length;i++){
            var data=downData[i]
            itemArr.push(
                <CommonItem1 key={i} width={width/2} mainTitle={data.maintitle} subTitle={data.title} mainTitleColor={data.typeface_color} iconName={this.dealWidthUrl(data.imageurl)}/>
            )
        }
        return itemArr
    }
    dealWidthUrl(url){
        if(url.search('w.h')==-1){//没有找到正常返回
            return url
        }else{
            var wh=Math.floor(width*0.1*4)+'.'+Math.floor(height*0.1*4)
            //console.log("wh="+wh)
            var replaceUrl=url.replace('w.h',wh)
            //console.log("replaceUrl="+replaceUrl)
            return replaceUrl
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <CommonItem1 fontSize={height*0.04} width={width} mainTitle="最高立减25" subTitle="快速立减减减" mainTitleColor="#F6B144" iconName="nsj"/>
                </View>
                <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                    {this.renderDownView()}
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
