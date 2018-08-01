import {createBottomTabNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons';

import LoginForm from './LoginForm';
import RegForm from './RegForm';
import Notificationss from './Notifications';

var myTabs = createBottomTabNavigator({
    Home:{screen:LoginForm},
    Register:{screen:RegForm},
    Notifications:{screen:Notificationss}
 },
{
 //   tabBarPosition:'bottom',
    animationEnabled:true,
    tabBarOptions:{
        activeTintColor:'red',
    }
});

export default myTabs;