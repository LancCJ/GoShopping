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
    Alert
} from 'react-native';

//导入外部组件
import Main from '../main/Main'

/**
 *启动界面
 */
export default class LanuchImage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //复杂操作 定时器|网络请求
    componentDidMount(){
        //2S后切换到MAIN
        setTimeout(()=>{
            const { navigator } = this.props;
            //为什么这里可以取得 props.navigator?请看上文:
            //<Component {...route.params} navigator={navigator} />
            //这里传递了navigator作为props
            if(navigator) {
                navigator.replace({
                    name: '首页',
                    component: Main
                })
            }
        },2000)
    }
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.lanuchImageStyle}/>
        );
    }
}

const styles = StyleSheet.create({
    lanuchImageStyle: {
        flex: 1
    }
});
