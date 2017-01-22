/**
 * Created by lanccj on 17/1/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View
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
    constructor() {
        super()
        this.state = {
            selectedTab: 'home',
        }
    }
    changeTab (selectedTab) {
        this.setState({selectedTab})
    }
    render() {
        const { selectedTab } = this.state

        return (
            <View style={styles.container}>
                <Tabs>
                    <Tab
                        titleStyle={{fontWeight: 'bold', fontSize: 10}}
                        selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                        selected={selectedTab === 'home'}
                        title={selectedTab === 'home' ? '首页' : null}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='home' size={33} />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
                        onPress={() => this.changeTab('home')}>
                        <Home />
                    </Tab>
                    <Tab
                        titleStyle={{fontWeight: 'bold', fontSize: 10}}
                        selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                        selected={selectedTab === 'shop'}
                        title={selectedTab === 'shop' ? '商家' : null}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='store' size={33} />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='store' size={30} />}
                        onPress={() => this.changeTab('shop')}>
                        <Shop />
                    </Tab>
                    <Tab
                        titleStyle={{fontWeight: 'bold', fontSize: 10}}
                        selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                        selected={selectedTab === 'more'}
                        title={selectedTab === 'more' ? '更多' : null}
                        renderIcon={() => <Icon type='ionicon' containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='ios-more' size={33} />}
                        renderSelectedIcon={() => <Icon type='ionicon' color={'#6296f9'} name='ios-more' size={30} />}
                        onPress={() => this.changeTab('more')}>
                        <More />
                    </Tab>
                    <Tab
                        titleStyle={{fontWeight: 'bold', fontSize: 10}}
                        selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                        selected={selectedTab === 'mine'}
                        title={selectedTab === 'mine' ? '我' : null}
                        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                        renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                        onPress={() => this.changeTab('mine')}>
                        <Mine />
                    </Tab>
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
