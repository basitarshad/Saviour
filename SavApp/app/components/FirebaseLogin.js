import React from 'react';
import {View,Button,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {FormLabel, FormInput} from 'react-native-elements';


export default class FirebaseLogin extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email:'',password:'',error:'',loading:false};
    }

    onLoginPress()
    {
        this.setState({error:'',loading:true});

        const{email,password}= this.state;
        firebase.auth.signInWithEmailAndPassword(email,password)
        .then(() =>{
            this.state({error:'',loading:false});
            this.props.navigate.navigate('BottomNav');
        })
        .catch(()=>{
            this.state({error:'Authentication failed',loading:false});

        })
    }

    onSignUpPress()
    {
       // this.setState({error:'',loading:true});

        const{email,password}= this.state;
        firebase.auth.createUserWithEmailAndPassword(email,password)
        .then(() =>{
            this.state({error:'',loading:false});
            this.props.navigate.navigate('BottomNav');
        })
        .catch(()=>{
            this.state({error:'Authentication failed'});
            
        })
    }

    // renderButtonOrLoading()
    // {
    //     if(this.state.loading)
    //     {
    //         return <View>
    //             <Button onPress={this.onLoginPress.bind(this)} title='LogIn'/>
    //             <Button onPress={this.onSignUpPress.bind(this)} title='SignUp'/>
    //         </View>
    //     }
    // }

    render()
    {
        return(
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput 
                value={this.state.email}
                placeholder='saviour@mail.com'
                onChangeText={email =>this.setState({email})}
                value={this.state.email} />

                <FormLabel>Password</FormLabel>
                <FormInput 
                value={this.state.password}
                secureTextEntry={true}
                placeholder='*****'
                onChangeText={password => this.setState({password})}
                value={this.state.password} />

                <Text>{this.state.error}</Text>
                <Button onPress={this.onSignUpPress} title='SignUp'/>
                {/* {this.renderButtonOrLoading()} */}
            </View>
        )
    }
}