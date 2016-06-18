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
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  AppStateIOS,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get('window');

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
        <Image style={styles.centerImage} source={require('../images/dota2.jpg')}>
          <Text style={styles.topText}>
            hello, this is a center page.
          </Text>
          <Text style={styles.bottomText}>
            hello, this is the bottom of a center page.
          </Text>
        </Image>
      </View>;
		return (
			<View style={styles.container}>
        <NavigationBar
          style={styles.navigatorTitle}
          statusBar={{hidden: false, tintColor: '#008CBA'}}
          tintColor="#202020"
          title={{title: 'home', tintColor: 'white'}}
          rightButton={
            <View style={{flexDirection: 'row', top: 5,}} >
              <TouchableHighlight onPress={() => alert(AppStateIOS.currentState)}>
                <View style={styles.iconButton}  >
                  <Icon name="plus" size={22}  style={{color:"white",}} />
                </View>  
              </TouchableHighlight>
              <TouchableHighlight onPress={this.props.show_slider_bar}>
                <View style={styles.iconButton} >
                  <Icon name="navicon" size={22}  style={{color:"white",}} />
                </View>  
              </TouchableHighlight>  
            </View>
          }
        />
        {centerPage}
			</View>
		);
	}
}

var _main_color = '#008CBA';
var styles = StyleSheet.create({
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
    marginRight: 10,
  },
  centerPage: {
    flex: 1,
    // justifyContent: 'center',
  },
  topText: {
    paddingTop: 30,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flexWrap: 'wrap',
    flex: 2,
    backgroundColor: 'transparent',
  },
  centerImage: {
    flex: 1,
    width: 320,
    height: 460,
  },
  bottomText: {
    paddingTop: 30,
    flex: 1,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  navigatorTitle: {
    backgroundColor: _main_color,
    flexDirection: 'row',
    // marginTop: -20,
  },
	headerBody: {
		padding: 20,
		backgroundColor: '#FFF',
		marginBottom: 15,
		flexDirection: 'row',
	},
	container: {
		flex: 1,
	},
  
});
