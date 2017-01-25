/**
 * Created by lanccj on 17/1/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Navigator,
    Image
} from 'react-native';

import { Tabs, Tab, Icon } from 'react-native-elements'


var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

import Home from '../home/Home'
import Shop from '../shop/Shop'
import More from '../more/More'
import Mine from '../mine/Mine'

/**
 *
 */
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home',
        }
    }
    changeTab (selectedTab) {
        this.setState({selectedTab})
    }
    renderTab(id,title,iconNameUnSelected,iconNameSelected,compo){
        const { selectedTab } = this.state
        return (
            <Tab
                titleStyle={{fontWeight: 'bold', fontSize: width*0.035,color:'#FFFFFF'}}
                selectedTitleStyle={{marginTop: -1, marginBottom: 6,fontWeight: 'bold', fontSize: width*0.035,color:'#ED6000'}}
                selected={selectedTab === id}
                title={selectedTab === id ? title : null}
                renderIcon={() => <Image source={{uri:iconNameUnSelected}} style={{width:width/10,height:width/10,resizeMode:'contain'}} />}
                renderSelectedIcon={() => <Image source={{uri:iconNameSelected}} style={{width:width/10,height:width/10,resizeMode:'contain'}} />}
                onPress={() => this.changeTab(id)}>
                <Navigator
                    initialRoute={{ name: title, component: compo }}
                    //配置场景
                    configureScene={
                                    (route) => {
                                        //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                                        return ({
                                            ...Navigator.SceneConfigs.HorizontalSwipeJump,
                                            gestures:null
                                        });
                                    }
                                }
                    renderScene={
                                    (route, navigator) =>{
                                        let Component = route.component;
                                        return <Component {...route.params} navigator={navigator} />
                                    }
                                }
                />
            </Tab>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Tabs>
                    {this.renderTab('home','首页','icon_tabbar_homepage','icon_tabbar_homepage_selected',Home)}
                    {this.renderTab('shop','商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',Shop)}
                    {this.renderTab('more','更多','icon_tabbar_misc','icon_tabbar_misc_selected',More)}
                    {this.renderTab('mine','我'  ,'icon_tabbar_mine','icon_tabbar_mine_selected',Mine)}
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
   }
});
