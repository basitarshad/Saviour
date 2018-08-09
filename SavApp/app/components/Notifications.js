import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Notifications extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
