import {  } from 'expo-status-bar';
// import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Image,TouchableOpacity } from 'react-native';
// import { Platform } from 'react-native-web';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { loginScreen } from "./app/screens/loginScreen";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeStack from './app/routes/HomeStack';
import { TransitionSpecs } from 'react-navigation-stack';

//const Stack = createStackNavigator();

export default function App() {
  return (
    <HomeStack 
      options={{
        headerShown: false,
        }}
      //style={{backgroundColor: '#d4e7f3'}}
    />
    
  );
}
/*
const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
  container: {
    flex: 1,
    backgroundColor: '#d4e7f3',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  containerExtended: {
    paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
  },
  input: {
    height: 40,
    margin: 2,
    // borderWidth: 1,
    padding: 10
  },
  searchIcon: {
    padding: 10,
  },
  naastElkaar: {
    // flex: 1,
    flexDirection: "row",
    //justifyContent: "center",
  },
  container2: {
    backgroundColor: '#d4e7f3',
    alignItems: 'center',
    justifyContent: 'center',
  }
});*/
