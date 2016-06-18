'use strict';

import React from 'react';
import {
  Component,
  Navigator,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class RoomCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { roomData } = this.props;

    return (
      <TouchableHighlight
        onPress={this.props.onSelect}
        underlayColor='#F5FCFF'>
        <View style={{backgroundColor:'#FFF'}}>
          <View style={{padding:10, flexDirection:'row'}}>
            <View style={{flex:2, paddingLeft: 10}}>
              <Text style={{fontSize:16}}>{roomData.name}</Text>
            </View>
            <View style={{flex:1, paddingLeft: 10}}>
              <Text style={{fontSize:16, color: 'yellow'}}>{roomData.operation}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
});

module.exports = RoomCell;
