'use strict';

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TabBarIOS,
  Navigator,
  NavigatorIOS,
  Component,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import RouteHome from './RouteHome';
import Message from './views/Message';
// import Discover from './views/Discover';
import RouteMe from './RouteMe';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/FontAwesome';

const HOME_TAB = 'homeTab';
const MESSAGE_TAB = 'messageTab';
const DISCOVER_TAB = 'discoverTab';
const ME_TAB = 'meTab';

// class Button extends React.Component {
//   handlePress(e) {
//     if (this.props.onPress) {
//       this.props.onPress(e);
//     }
//   }

//   render() {
//     return (
//       <TouchableOpacity
//         onPress={this.handlePress.bind(this)}
//         style={this.props.style}>
//         <Text>{this.props.children}</Text>
//       </TouchableOpacity>
//     );
//   }
// }


export default class MainPage extends React.Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    const window = Dimensions.get('window');
    let menu_offset = window.width * 0.3;
    
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
        openMenuOffset={menu_offset}>
        <TabBar show_slider_bar={this.toggle} />
        
      </SideMenu>
    );
  }
};


class TabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: HOME_TAB,
      notifCount: 0,
      presses: 0,
    };
  }
  setTab(tabId){
    this.setState({selectedTab: tabId})
  }

  _addNavigator(component, title){
    var data = null;
    if(title === '首页'){
      data = this.state.data;
    }
    return <NavigatorIOS
      style={{flex:1}}
      barTintColor='#FFF'
      titleTextColor="#666"
      tintColor="#666"
      translucent={false}
      initialRoute={{
        component: component,
        title: title,
        passProps:{
          data: data
        }
      }}
      />;
  }

  _renderContent(pageName: string, num?: number) {
    var renderView;
    if(pageName == HOME_TAB){
      renderView = <RouteHome  show_slider_bar={this.props.show_slider_bar} />;
    } else if(pageName == MESSAGE_TAB){
      renderView = <Message />
    } else if(pageName == ME_TAB){
      renderView = <RouteMe />
    }

    return (
      <View style={styles.pageView}>
        {renderView}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
          tintColor="#11a984"
          barTintColor="#FFFFFF">
          <TabBarIOS.Item
            title="Dashboard"            
            selected={this.state.selectedTab === HOME_TAB}
            onPress={() => this.setTab(HOME_TAB)}>
            {this._renderContent(HOME_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="My Home"
            icon={require('./images/icon_message_nor.png')}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === MESSAGE_TAB}
            onPress={() => this.setTab(MESSAGE_TAB)}>
            {this._addNavigator(Message, '消息列表')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Routines"
            icon={require('./images/icon_user_nor.png')}
            selected={this.state.selectedTab === ME_TAB}
            onPress={() => this.setTab(ME_TAB)}>
            {this._renderContent(ME_TAB)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Marketplace"
            icon={require('./images/icon_user_nor.png')}
            selected={this.state.selectedTab === ME_TAB}
            onPress={() => this.setTab(ME_TAB)}>
            {this._renderContent(ME_TAB)}
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}



var styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,

  },
  container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    margin: 50,
  }
});
