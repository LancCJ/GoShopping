/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import LanuchImage from './app/compos/LanuchImage'

export default class GoShopping extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: '启动页', component: LanuchImage }}
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
        );
    }
}

AppRegistry.registerComponent('GoShopping', () => GoShopping);
