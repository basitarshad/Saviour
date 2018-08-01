import React from 'react';
import { StyleSheet,
     Text,
      View,
      TextInput,
      TouchableOpacity
     } from 'react-native';

export default class Regform extends React.Component {
constructor()
{
    super()
    this.state=
    {
        name:'',
        password:'',
        nameValidate:true,
        passwordValidate:true
    }
}

validate(text,type)
{
    alph=/^[a-zA-Z]+$/
    num=/^[a-zA-Z0-9]+$/
    if(type=='username')
    {
        if(alph.test(text))
        {
            this.setState({
                nameValidate:true,
            })
        }
        else
        {
            this.setState({
                nameValidate:false,
            })
        }
    }
    else if(type=='password')
    {
        if(num.test(text))
        {
            this.setState({
                passwordValidate:true,
            })
        }
        else
        {
            this.setState({
                passwordValidate:false,
            })
        }
    }
}

  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Sign Up</Text>

        <TextInput style={[styles.textinput,!this.state.nameValidate? styles.error:null]} placeholder='Name'
        underlineColorAndroid={'transparent'} onChangeText={(text)=>this.validate(text,'username')} />
        <TextInput style={[styles.textinput,!this.state.passwordValidate? styles.error:null]} placeholder='Email'
        underlineColorAndroid={'transparent'} onChangeText={(text)=>this.validate(text,'password')} />
        <TextInput style={styles.textinput} placeholder='Password'
        secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntxt}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf:'stretch'
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
      color:'#fff',
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
