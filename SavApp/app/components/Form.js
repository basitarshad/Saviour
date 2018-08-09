import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import { Card } from '../../node_modules/react-native-paper';

class Example extends Component {
  state = {
    phone: '',
  };
 
  render() {
    let { phone } = this.state;
 
    return (
      <Container>
          <Content>
              <Card>
              <TextField
            label='Phone number'
            value={phone}
            onChangeText={ (phone) => this.setState({ phone }) }
            />
              </Card>
          </Content>
      </Container>
    );
  }
}

export default Example;