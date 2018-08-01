import React from 'react';
import { Text, View, StyleSheet,Image,YellowBox } from 'react-native';
import { createTabNavigator } from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import LoginScreen from './LoginScreen';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
  CardItem
} from 'react-native-card-view';

import Button from 'react-native-button';

class HomeScreen extends React.Component {
  render() {
    return (
      <View></View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  button: {
    marginRight: 10
  },
  logo:
  {

  }
});

export default createTabNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SettingsScreen },
});