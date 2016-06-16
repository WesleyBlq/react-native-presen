'use strict';

import React from 'react';
import {
	AppRegistry,
	Component,
	StyleSheet,
  ListView,
	Image,
	Text,
	View,
  TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import JobCell from './home/JobCell';
import JobDetail from './home/JobDetail';
import JobList from './home/JobList';

class Button extends React.Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}


var renderHeader = function (index, total, context) {
  
	return (
		<View style={styles.headerBody}>
			<Image source={require('../images/icon_find_ok.png')} style={{width:52,height:50}}/>
			<View style={{paddingLeft:20}}>
				<Text style={{fontSize:18}}>可<Text style={{color:'#11a984'}}>直接沟通</Text>的职位推荐</Text>
				<Text style={{marginTop:15,fontSize:13,color:'#999'}}>来和老板直接聊offer吧</Text>
			</View>
		</View>
	)
}

export default class Home extends React.Component {
	render() {
    var centerPage =
      <View style={styles.centerPage}>
        <Text style={styles.topText}>
          hello, this is a center page.
        </Text>
        <Image style={styles.centerImage}>
        </Image>
        <Text style={styles.bottomText}>
          hello, this is the bottom of a center page.
        </Text>
      </View>;
		return (
			<View style={styles.container}>
        <NavigationBar
          style={styles.navigatorTitle}
          statusBar={{hidden: true}}
          tintColor="#202020"
          title={{title: 'home', tintColor: 'white'}}
          rightButton={{title: 'Second', tintColor: '#3CABDA'}}
        />
        
        {centerPage}
			</View>
		);
	}
}

var _main_color = '#008CBA';
var styles = StyleSheet.create({
  centerPage: {
    flex: 1,
  },
  topText: {
    paddingTop: 30,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  centerImage: {
    flex: 3,
  },
  bottomText: {
    paddingTop: 30,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  navigatorTitle: {
    backgroundColor: _main_color,
    flexDirection: 'row',
  },
	headerBody: {
		padding: 20,
		backgroundColor: '#FFF',
		marginBottom: 15,
		flexDirection: 'row',
	},
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#EEE',
		paddingBottom: 48,
	},
});
