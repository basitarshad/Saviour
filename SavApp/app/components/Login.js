import React from 'react';
import { StyleSheet,
    Text,
    View,
    Image
     } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={{uri:'https://orig00.deviantart.net/1737/f/2011/120/4/0/smyf_s_logo_by_smyf-d3f9wxp.png'}}
        />
        <Text style={styles.title}>Welcome to Saviour!</Text>
        </View>

        <View style={styles.formContainer}>
        <LoginForm/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    flex:1,
  },
  logoContainer:
  {
    alignItems:'center',
    justifyContent:'center',
    flexGrow:1
  },
  logo:
  {
    width:100,
    height:100
  },
  title:
  {
      color:'#0F0F10',
      marginTop:10,
      textAlign:'center',
      opacity:0.8,
      fontWeight:'bold'
  }
});