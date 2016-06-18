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
  ScrollView,
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import RouteHome from './RouteHome';
import HomeTabMenu from './views/HomeTabMenu';
// import Discover from './views/Discover';
import RouteMe from './RouteMe';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');
const HOME_TAB = 'homeTab';
const MY_HOME_TAB = 'myHomeTab';
const Routines_TAB = 'routinesTab';
const Marketplace_TAB = 'marketplaceTab';

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
    selectedItem: HOME_TAB,
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
    let menu_offset = window.width * 0.4;
    
    return (
    <SideMenu
      menu={menu}
      isOpen={this.state.isOpen}
      onChange={(isOpen) => this.updateMenuState(isOpen)}
      openMenuOffset={menu_offset}>
      <TabBar show_slider_bar={this.toggle.bind(this)} />
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
      barTintColor='#008CBA'
      titleTextColor="#ffffff"
      tintColor="#ffffff"
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

  _renderContent(pageName: string) {
    var renderView;
    if(pageName == HOME_TAB){
      renderView = <RouteHome  show_slider_bar={this.props.show_slider_bar} />;
    } else if(pageName == Marketplace_TAB){
      renderView = <RouteMe />
    }

    return (
      <View style={styles.pageView}>
        {renderView}
      </View>
    );
  }
  // {this._renderContent(Marketplace_TAB)}
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
          tintColor="#008CBA"
          barTintColor="#FFFFFF">
          <Icon.TabBarItemIOS
            title="Home"
            iconName="home"
            selectedIconName="home"
            selected={this.state.selectedTab === HOME_TAB}
            onPress={() => this.setTab(HOME_TAB)}>
            {this._renderContent(HOME_TAB)}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="My Home"
            iconName="th-large"
            selectedIconName="th-large"
            selected={this.state.selectedTab === MY_HOME_TAB}
            onPress={() => this.setTab(MY_HOME_TAB)}>
            {this._addNavigator(HomeTabMenu, 'My Home')}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Routines"
            iconName="bicycle"
            selectedIconName="bicycle"
            selected={this.state.selectedTab === Routines_TAB}
            onPress={() => this.setTab(Routines_TAB)}>
            {this._renderContent(Routines_TAB)}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Setting"
            iconName="gear"
            selectedIconName="gear"
            selected={this.state.selectedTab === Marketplace_TAB}
            onPress={() => this.setTab(Marketplace_TAB)}>
            {this._renderContent(Marketplace_TAB)}
          </Icon.TabBarItemIOS>
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
    flex: 5,
  },
  
});
