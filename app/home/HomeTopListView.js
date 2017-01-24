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
    ScrollView,
    TouchableOpacity
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
            <TouchableOpacity onPress={()=>{Alert.alert('点击条目')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowData.image}} style={styles.topListViewImageStyle}/>
                    <Text style={{fontSize:width*0.03,color:'#5E6977'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
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
        height:width*0.15,
        width:width*0.15
    },
    contentViewStyle:{
        width:width,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    cellStyle:{
        //backgroundColor:'red',
        width:width*0.2,
        height:width*0.2,
        justifyContent:'center',
        alignItems:'center',
        marginTop:width*0.02,
        marginLeft:(width-width*0.2*5)/6
    }

});
