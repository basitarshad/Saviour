import {createBottomTabNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons';

import LoginForm from './LoginForm';
import RegForm from './RegForm';
import Notificationss from './Notifications';
import ProfileScreen from './ProfileScreen';

var myTabs = createBottomTabNavigator({
    Home:{screen:LoginForm},
    Register:{screen:RegForm},
    Profile:{screen:ProfileScreen}
 },
{
 //   tabBarPosition:'bottom',
    animationEnabled:true,
    tabBarOptions:{
        activeTintColor:'red',
    }
});

export default myTabs;