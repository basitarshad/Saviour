import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginAnimation from './modules/LoginAnimation';
import ProfileScreen from './modules/ProfileScreen';
import fire from './modules/Fire';
import EditProfile from './modules/EditProfile'
import GiftedForm from './modules/GiftedForm'
import ReduxForm2 from './modules/ReduxForm2'
import ImageUpload2 from './modules/ImageUpload2'
import ImageUpload from './modules/ImageUpload'
import SignUp from './modules/containers/AuthScreen/SignUp'
import BottomNav from './modules/BottomNav'
import MainScreen from './modules/MainScreen'

export default class App extends React.Component {
 // user = fire.auth().currentUser;
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
      //console.log(user);
    }

  render() {
    
    return (
      
        //<ProfileScreen/>
        // <View>
       //this.state.user?<EditProfile/> : <LoginAnimation/>
       // </View>
       <MainScreen/>
       // <BottomNav/>
       //<SignUp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
