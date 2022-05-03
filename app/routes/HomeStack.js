
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const screens = {
  LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
      headerShown: false,
    }
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },  
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);