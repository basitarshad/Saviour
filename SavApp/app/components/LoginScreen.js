import React from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
  CardItem
} from 'native-base';

import {Button} from 'react-native-button';

class LoginScreen extends React.Component {
  render () {
    return (
      <Card style={styles.container}>
        <CardItem>
          <Image style={{ resizeMode: 'cover' }} source={require('../images/background.jpg')} />
        </CardItem>
        <CardAction >
          <Button
            style={styles.button}
            onPress={() => {}}>
            Button 1
          </Button>
          <Button
            style={styles.button}
            onPress={() => {}}>
            Button 2
          </Button>
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  }
});

export default LoginScreen;