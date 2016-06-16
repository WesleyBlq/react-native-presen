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

import Me from './views/Me';

class RouteMe extends React.Component {
	render() {
		var defaultName = 'Me';
    var defaultComponent = Me;
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

module.exports = RouteMe;
