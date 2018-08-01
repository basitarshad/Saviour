import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapComponent from './app/components/MapComponent';
import Cardview from './app/components/CardView';
import TabNavigate from './app/components/TabNavigator';
import HomeScreen from './app/components/HomeScreen';
import LoginScreen from './app/components/LoginScreen';

class App extends React.Component {
  render() {
    return (
      //<View style={styles.container}>
        <HomeScreen />
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;