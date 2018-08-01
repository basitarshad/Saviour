import React from 'react';
import{
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from '@expo/vector-icons';

class MainScreen extends React.Component{
    
    // static navigationOptions={
    //     tabBarIcon:({tintColor}) => (
    //         <Icon name='md-home' size={25} color={tintColor}  />
    //     )
    // }
    render()
    {
        return(
            <View style={styles.container}>
                <Text>MainScreen</Text>
                <Text>MainScreen</Text>
                <Text>MainScreen</Text>
                <Text>MainScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        
    }
});

export default MainScreen;