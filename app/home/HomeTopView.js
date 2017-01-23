/**
 * Created by lanccj on 17/1/23.
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

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

var colorArr=['red','green']
/**
 *首页顶部 左右滑动视图
 */
export default class HomeTopView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage:0
        };
    }
    renderScrollItem(){
        var itemArr=[]
        for (var i=0;i<colorArr.length;i++){
            itemArr.push(
                <View key={i} style={{width:width,height:height*0.25,backgroundColor:colorArr[i]}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return itemArr
    }
    renderPageInfoItem(){
        var pageInfoArr=[]
        for (var i=0;i<colorArr.length;i++){
            pageInfoArr.push(
                <Text key={i} style={this.state.activePage===i?styles.activepageInfoStyle:styles.pageInfoStyle}>&bull;</Text>
            )
        }
        return pageInfoArr
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event) => {
                        let currentPage = Math.floor(event.nativeEvent.contentOffset.x/width)
                        this.setState({
                            activePage:currentPage
                        })
                    }}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    {this.renderPageInfoItem()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    activepageInfoStyle:{
        color:'#FA5600',
        fontSize:20
    },
    pageInfoStyle:{
        color:'#5E6977',
        fontSize:20
    }

});
