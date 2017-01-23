/**
 * Created by lanccj on 2017/1/23.
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
export default class HomeTopListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    }
    renderRow(rowData){
        return (
            <View>
                <Image source={{uri:rowData.image}} style={styles.topListViewImageStyle}/>
                <Text>{rowData.title}</Text>
            </View>
        )
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scorllEnabled={false}
            />
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
    },
    topListViewImageStyle:{
        height:width*0.1,
        width:width*0.1
    },
    contentViewStyle:{
        width:width,
        flexWrap:'wrap',
        flexDirection:'row'
    }

});
