import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, CardItem, Card } from 'native-base';
import {View, StyleSheet,Image,YellowBox, TextInput,TouchableOpacity } from 'react-native';
import { TextField,Button } from 'react-native-material-textfield';
const Item = Picker.Item;

export default class FormExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            
                                 <Icon name="ios-contact" style={{ color: '#0A69FE' }} />
                                <TextField inlineLabel label="First Name" placeholder="John" />
                            
                        </CardItem>
                    
                        {/* <ListItem>
                            <InputGroup>
                                <Icon name="ios-mail" style={{ color: '#0A69FE' }} />
                                <Input placeholder="E-mail" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="Password" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                <Input placeholder="Phone" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                            <Text>GENDER</Text>
                            <Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Male" value="key0" />
                                <Item label="Female" value="key1" />
                                <Item label="Other" value="key2" />
                            </Picker>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Permanent Address" placeholder="Address" />
                            </InputGroup>
                        </ListItem> */}
                    </Card>
                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                      <Text>  Sign Up </Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}