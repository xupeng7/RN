/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import HelloWorld from'./component/hello'
import StyleTest from './component/StyleTest'
import FlexBox from'./component/FlexBox'
import TabNavigator from 'react-native-tab-navigator'
import Home from './component/tab/Home'
import Public from './component/tab/Public'
import Icon from 'react-native-vector-icons/FontAwesome';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


export default class App extends Component<Props> {
    constructor(props){
        super(props)
        this.state={
            selectedTab:'home'
        }

    }




  render() {
    return (
           <View style={styles.container}>

               <TabNavigator>
                   <TabNavigator.Item
                       selected={this.state.selectedTab === 'home'}
                       title="Home"
                       //未选中状态下展示的图标
                      renderIcon={() => <Icon name="home" size={30} color="#900"  />}
                       //选中状态下展示的
                       renderSelectedIcon={() => <Icon name="home" size={30} color="black" />}
                       //badgeText="1"
                       //当点击这个tab时 会触发事件 将 selectedTab 的值改变
                       onPress={() => this.setState({ selectedTab: 'home' })}
                   >
                       <Home></Home>

                       </TabNavigator.Item>
                   <TabNavigator.Item
                      selected={this.state.selectedTab === 'public'}
                       title="public"
                       renderIcon={() => <Icon name="android" size={30} color="#900" />}
                       renderSelectedIcon={() => <Icon name="android" size={30} color="black" />}
                       //renderBadge={() => <CustomBadgeView />}
                       onPress={() => this.setState({ selectedTab: 'public' })}
                   >
                       <Public></Public>
                   </TabNavigator.Item>


                   <TabNavigator.Item
                       selected={this.state.selectedTab === 'search'}
                       title="搜索"
                        renderIcon={() => <Icon name="search" size={30} color="#900" />}
                        renderSelectedIcon={() => <Icon name="search" size={30} color="black" />}
                       //badgeText="1"

                       //当点击这个tab时 会触发事件 将 selectedTab 的值改变
                       onPress={() => this.setState({ selectedTab: 'search' })}
                   >
                       <Home></Home>

                   </TabNavigator.Item>

               </TabNavigator>











           </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },



});
