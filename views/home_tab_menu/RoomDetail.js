'use strict';

import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

export default class RoomDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {job: null};
  }

  _pressButton(){
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop();
    }
  }

  render() {
    const { job } = this.props;

    return (
      <View style={{flex: 1, backgroundColor:'white'}}>
        <View style={{padding:15, flexDirection:'row'}}>
          <Text style={{flex:1}}>{'title'}</Text>
        </View>
        <View style={{padding: 15}}>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
