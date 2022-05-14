
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubjectViewer from '../screens/SubjectsViewer';
import SubjectsViewerPromotoren from '../screens/SubjectsViewerPromotoren';
import SubjectDetails from "../screens/SubjectDetails";
import BoostStudent from "../screens/BoostStudent";

const screens = {

  LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
      headerShown: false,
    }
  },
    SubjectViewer: {
        screen: SubjectViewer,
        navigationOptions: {
            headerShown:false
        }
    },
    SubjectsViewerPromotoren: {
        screen: SubjectsViewerPromotoren,
        navigationOptions: {
            headerShown:false
        }
    },
    SubjectDetails: {
        screen: SubjectDetails,
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
    BoostStudent: {
        screen: BoostStudent,
        navigationOptions: {
            headerShown: false,
        }
    },

}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);