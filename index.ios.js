'use strict';
import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import SplashPage from './SplashPage';
import MainPage from './MainPage';

class ZwaveNativeProject extends React.Component {
  render() {
    var defaultName = 'Splash';
    var defaultComponent = SplashPage;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      configureScene={(route) => {
        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
      }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />
    );
  }
}

AppRegistry.registerComponent('ZwaveNativeProject', () => ZwaveNativeProject);
