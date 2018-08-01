import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    AppRegistry
} from 'react-native';
import {
    Card,
    CardImage,
    CardTitle,
    CardContent,
    CardAction
  } from 'react-native-card-view';
import Button from 'react-native-button';

export default class LoginForm extends React.Component
{
    RegisterActivity = () =>
 {
    this.props.navigation.navigate('First');
    
 }
    render()
    {
        return(
            <View behavior='padding' style={styles.container}>
            <TextInput
            placeholder='Email'
            placeholderTextColor='#BBBBC6'
            style={styles.input}
            />
            <TextInput
            placeholder='Password'
            placeholderTextColor='#BBBBC6'
            secureTextEntry={true}
            style={styles.input}
            />

            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.bottomtxt}>
            <Text>Not a member yet?</Text>       
            <Text style={styles.registerTxt}>Register here!</Text>
            </View>

            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        padding:20
    },
    input:
    {
        height:40,
        marginBottom:10,
        paddingHorizontal:10,
        color:'#000000'
    },
    btnContainer:
    {
        backgroundColor:'#2980b9',
        paddingVertical:30
    },
    btnText:
    {
        textAlign:'center',          
        color:'#ffffff',
        fontWeight:'700',
    },
    bottomtxt:
    {
        paddingTop:10
    },
    registerTxt:
    {
        fontWeight:'bold',
        color:'#2980b9'
    }
});