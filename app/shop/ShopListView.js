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

/**
 *
 */
export default class ShopListView extends Component {
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
                   <Image source={{uri:rowData.img}} style={styles.shopListViewImageStyle}/>

                   <View style={{padding:width*0.02,width:width-width*0.04*2-height*0.12,height:height*0.12,justifyContent:'space-between'}}>
                       <View style={{height:(height*0.15-height*0.03*2)/3,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                           <Text>{rowData.name}</Text>
                           <Text style={{color:'#5E6977'}}>2.1KM</Text>
                       </View>

                       <Text style={{height:(height*0.15-height*0.03*2)/3,width:width-width*0.04*2-height*0.12-width*0.02,color:'#5E6977'}} numberOfLines={1}>[价值343元]套餐是飒飒撒没得打客服谁说的算多少</Text>

                       <View style={{height:(height*0.15-height*0.03*2)/3,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                               <Text style={{color:'#5CD0C0'}}>¥178</Text>
                               <Text style={{color:'red',width:width*0.1,height:(height*0.15-height*0.03*2)/3,backgroundColor:'#FAE7D6',borderRadius:(height*0.15-height*0.03*2)/3/2}}>减12</Text>
                           </View>
                           <Text style={{backgroundColor:'#FF9604',color:'#FFFFFF',width:width*0.2,textAlign:'center',height:height*0.035,fontSize:width*0.05}}>¥153抢</Text>
                       </View>
                   </View>
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
    shopListViewImageStyle:{
        height:height*0.12,
        width:height*0.12,
        resizeMode:'contain'
    },
    contentViewStyle:{
        width:width
    },
    cellStyle:{
        width:width,
        height:height*0.15,
        paddingLeft:width*0.04,
        paddingRight:width*0.04,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5,
        backgroundColor:'#FFFFFF'
    }
});
