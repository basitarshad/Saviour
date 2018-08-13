import React from 'react';
import { Text, View, StyleSheet,Image,YellowBox, TextInput,TouchableOpacity } from 'react-native';
import { createTabNavigator } from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {Container, Content, InputGroup, Input, KeyboardAvoidingView} from 'native-base';
import * as firebase from 'firebase';
import fire from './Fire';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
  CardItem
} from 'react-native-card-view';

// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: "AIzaSyAQmlKQO5H0bTnjOgKZn50_FWmgMccmQLw",
// authDomain: "savapp-3dd0f.firebaseapp.com",
// databaseURL: "https://savapp-3dd0f.firebaseio.com",
// projectId: "savapp-3dd0f",
// storageBucket: "savapp-3dd0f.appspot.com",
// messagingSenderId: "456931428577"
//     });
 //}

class HomeScreen extends React.Component {
//   constructor(props){
//     super(props);
//    // this.state = { email: '', password: '', errorMessage: null, user : this.props.user }
//   }
//   handleLogin = () => {
// // TODO: Firebase stuff...
// //const { navigate } = this.props.navigation;
// const { email, password } = this.state
// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then(() =>
//   <BottomNav/>  
//   //this.props.navigation.navigate('BottomNav')
//    )//this.props.navigation.navigate('BottomNav'))
//   .catch(error => this.setState({ errorMessage: error.message }))
//     }
  constructor(props)
  {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.handleChange.bind(this.signUp);
    this.state=
    {
      email:'',
      password:''
    }
  }


  login()
  {
    fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((u)=>{
    }).catch((error)=>{
      console.log(error);
    });
  }

  handleChange(e)
  {
    this.setState({[e.target.name] : e.target.value});
  }



  render() {
    console.log('HOME SCREEN WORKING');
    return (
      <Container style={styles.container}>
        <Content style={styles.textContent}>
            <Card>
          <TextInput style={ styles.textinput} placeholder='Email'
          underlineColorAndroid={'transparent'}
          name='email'
          onChange={this.handleChange}
          value={this.state.email} />

          <TextInput style={styles.textinput} placeholder='Password'
          secureTextEntry={true} underlineColorAndroid={'transparent'}
          name='password'
          onChange={this.handleChange}
          value={this.state.password} />

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.btntxt}>LogIn</Text>
          </TouchableOpacity>
            </Card>
        </Content>
      </Container>
    );
  }
}

class SettingsScreen extends React.Component {

  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.handleChange.bind(this.signUp);
    this.state=
    {
      email:'',
      password:'',
      uid:'',
      email:''
    }
  }

  signUp()
  {
    fire.auth().createUserWithEmailAndPassword(this.state.email , this.state.password)
 .catch((error)=>{
      console.log(error);
    });
  fire.auth().onAuthStateChanged(function(user){
    if(user)
    {
      var userid = user.uid;
      var mail = user.email;
      this.setState({uid:userid,email:mail},this.pasteInDb());

    }
    else
    {
      console.log('error');
    }
  })
  }
  pasteInDb(){
    fire.database.ref('users/').child(this.state.userid).push({email:this.state.mail});
  }
    render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.textContent}>
            <Card>
          <TextInput style={ styles.textinput} placeholder='Email'
          underlineColorAndroid={'transparent'}
          name='email'
          onChange={this.handleChange}
          value={this.state.email} />

          <TextInput style={styles.textinput} placeholder='Password'
          secureTextEntry={true} underlineColorAndroid={'transparent'}
          name='password'
          onChange={this.handleChange}
          value={this.state.password} />

          <TouchableOpacity style={styles.button} onPress={this.signUp}>
            <Text style={styles.btntxt}>LogIn</Text>
          </TouchableOpacity>
            </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
  textContent:
  {
    backgroundColor:'#BBBBC6',
    width:'90%',
    height:'50%'
  },
  button: {
    marginRight: 10
  },
  logo:
  {
    marginTop:20
  },
  header:
  {
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
  },
  textinput:
  {
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
      color:'#BBBBC6',
      borderBottomColor:'#f8f8f8',
      borderBottomWidth:1,
  },
  button:
  {
      alignSelf:'stretch',
      alignItems:'center',
      padding:20,
      backgroundColor:'#59cbbd',
      marginTop:30
  },
  btntxt:
  {
      color:'#fff',
      fontWeight:'bold',
  },
  error:
  {
      borderWidth:3,
      borderColor:'red'
  }
});

export default createTabNavigator({
  Login: { screen: HomeScreen },
  SignUp: { screen: SettingsScreen },
});