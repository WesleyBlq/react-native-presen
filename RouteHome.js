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

import Home from './views/Home';

export default class RouteHome extends React.Component {
	render() {
		var defaultName = 'Home';
    var defaultComponent = Home;
    return (
    <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} show_slider_bar={this.props.show_slider_bar} />
      }} />
    );
	}
}
