import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation';
import Notificate from './Notifications';
import ProfileScreen from './ProfileScreen';
import ProfileHeader from './ProfileHeader';
import EditProfile from './EditProfile';
import Form from './Form';
import ImageUpload from './ImageUpload';
import { BottomNavigation } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: Notificate,
    albums: Notificate,
    recents: EditProfile,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}