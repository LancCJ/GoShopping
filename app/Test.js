/**
 * Created by lanccj on 17/1/22.
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
/**
 *
 */
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:List了
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={[{color:"red"}]}
                    onPress={this._pressButton.bind(this)}
                >测试界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});
