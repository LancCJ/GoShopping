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
    Alert,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

import CommonItem1 from './CommonItem1'
import CommonItem2 from './CommonItem2'

var TopMiddletDate=require('../../LocalData/HomeTopMiddleLeft.json')

/**
 *
 */
export default class CommonView1 extends Component {
    renderLeftView(){
        var leftData=TopMiddletDate.dataLeft
        var data=leftData[0]
        return (
            <TouchableOpacity onPress={()=>{Alert.alert('点击了')}}>
                <CommonItem2 iconName1={data.img1} iconName2={data.img2} title1={data.title} title2={data.price} title3={data.sale}/>
            </TouchableOpacity>
        )
    }
    renderRightView(){
        var itemArr=[]
        var rightData=TopMiddletDate.dataRight
        for(i=0;i<rightData.length;i++){
            var data=rightData[i]
            itemArr.push(
                <TouchableOpacity key={i} onPress={()=>{Alert.alert('点击了')}}>
                    <View  style={{borderBottomWidth:i===0?0.5:0,borderBottomColor:i===0?'#DEDEDE':null}}>
                        <CommonItem1  width={width/2} mainTitle={data.title} subTitle={data.subTitle} mainTitleColor={data.titleColor} iconName={data.rightImage}/>
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr
    }
    render() {
        return (
            <View style={styles.container}>
                    <View style={{borderRightWidth:0.5,borderRightColor:'#DEDEDE'}}>
                        {this.renderLeftView()}
                    </View>
                    <View>
                        {this.renderRightView()}
                    </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:height*0.02,
        width:width,
        height:height*0.1*2,
        backgroundColor: "#FFFFFF",
        flexDirection:'row'
    }
});
