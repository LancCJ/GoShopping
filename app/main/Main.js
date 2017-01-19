/**
 * Created by lanccj on 17/1/19.
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

import TabNavigator from 'react-native-tab-navigator';

import home from '../home/Home'
import shop from '../shop/Shop'
import more from '../more/More'
import mine from '../mine/Mine'

/**
 *
 */
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {home}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'shop'}
                        title="商家"
                        onPress={() => this.setState({ selectedTab: 'shop' })}>
                        {shop}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'more'}
                        title="更多"
                        onPress={() => this.setState({ selectedTab: 'more' })}>
                        {more}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        title="我"
                        onPress={() => this.setState({ selectedTab: 'mine' })}>
                        {mine}
                    </TabNavigator.Item>
                </TabNavigator>
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
