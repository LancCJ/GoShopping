/**
 * Created by lanccj on 17/1/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Navigator
} from 'react-native';

import { Tabs, Tab, Icon } from 'react-native-elements'

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
    renderTab(id,title,iconType,iconName,compo){
        const { selectedTab } = this.state
        return (
            <Tab
                titleStyle={{fontWeight: 'bold', fontSize: 10,color:'#FA5600'}}
                selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                selected={selectedTab === id}
                title={selectedTab === id ? title : null}
                renderIcon={() => <Icon type={iconType} containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name={iconName} size={33} />}
                renderSelectedIcon={() => <Icon type={iconType} color={'#FA5600'} name={iconName} size={30} />}
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
                    {this.renderTab('home','首页','','home',Home)}
                    {this.renderTab('shop','商家','','shop',Shop)}
                    {this.renderTab('more','更多','ionicon','ios-more',More)}
                    {this.renderTab('mine','我'  ,'','person',Mine)}
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
