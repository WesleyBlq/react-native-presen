'use strict';

import React from 'react';
import {
	AppRegistry,
	AlertIOS,
	Component,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
	Image,
	Text,
	View,
	ListView,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import RoomCell from './home_tab_menu/RoomCell';
import RoomList from './home_tab_menu/RoomList';
import RoomDetail from './home_tab_menu/RoomDetail';

class HomeTabMenu extends React.Component {
	constructor() {
		super();
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this._genRows({}))
		}
		// 必须绑定，否则onPress报错
		this._renderRow = this._renderRow.bind(this);
	}

  selectRoom(Room: Object){
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        name: 'RoomDeail',
        component: RoomDetail,
        params: {
          Room: Room
        }
      })
    }
  }

  _renderRow(roomData: Object, sectionID: number, rowID: number) {
    return (
			<RoomCell onSelect={() => this.selectRoom(roomData)}  roomData={roomData}/>
    );
  }

  _genRows(): Array<string> {
    return RoomList;
  }

	render() {
    var resultList =
      <ListView
				automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />;

		return (
			<View style={styles.container}>
				<ScrollableTabView
		      style={{marginTop: 20,}}
		      renderTabBar={() => <DefaultTabBar style={{height: 20, paddingTop: 0,}} textStyle={{height:20,paddingTop:0,color:'#008CBA'}} underlineColor='#008CBA'/>}
		    >
		    	<View tabLabel='Rooms' >
		    		{resultList}
		    	</View>
		    	<View tabLabel='Things'>
		    		<Text >things content</Text>
		    	</View>
		    	<View tabLabel='Family'>
		    		<Text >family content</Text>
		    	</View>
		    </ScrollableTabView>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeTabMenu;
