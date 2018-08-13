import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
import BottomNav from './app/components/BottomNav';
import FirebaseLogin from './app/components/FirebaseLogin';
import TabNavigator from './app/components/TabNavigator';
import HomeScreen from './app/components/HomeScreen';
import LoginScreen from './app/components/LoginScreen';
import ProfileScreen from './app/components/ProfileScreen';
import ImageUpload from './app/components/ImageUpload';
import * as firebase from 'firebase';
import PopUpBox from './app/components/PopUpBox';
import fire from './app/components/Fire'

class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       user: null
//     };
//     firebase.initializeApp({
//       apiKey: "AIzaSyAQmlKQO5H0bTnjOgKZn50_FWmgMccmQLw",
// authDomain: "savapp-3dd0f.firebaseapp.com",
// databaseURL: "https://savapp-3dd0f.firebaseio.com",
// projectId: "savapp-3dd0f",
// storageBucket: "savapp-3dd0f.appspot.com",
// messagingSenderId: "456931428577"
//   });
//     this.authListener = this.authListener.bind(this);
//   }

//   Com
//   componentDidMount(){
//     console.log("Listening");
//     this.authListener();
//   }

//   authListener(){
//     firebase.auth().onAuthStateChanged((user)=>{
//       if(user){
//         this.setState({user});
//         console.log(user);
//       }
//       else{
//         this.setState({user: null});
//       }
//     })
//   }

    constructor(props)
    {
      super(props);
      this.authListener = this.authListener.bind(this);
      this.state={
        user:{},
      }
    }

    componentDidMount()
    {
      this.authListener();
    }

    authListener()
    {
      console.log('AUTH LISTENER WORKING');
      fire.auth().onAuthStateChanged((user) => {
        if(user)
        {
          this.setState({user});
          console.log(user);
        }
        else
        {
          this.setState({user:null});
        }
      });
      console.log('current user is:');
console.log(user);
    }
      render() {
        return (
          
          // <View style={styles.container}>
          // {this.state.user?<BottomNav/> : <HomeScreen/>}
          // </View>
          <View style = {{flex: 1}}>
          <BottomNav/>
          </View>
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